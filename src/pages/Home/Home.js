import { useEffect, useState } from "react";
import { getSchools } from "../../api/schools";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import HomePage from "./HomePage";
import SchoolDetails from "./SchoolDetails";
import Filter from "./Filter";
import { getTags } from "../../api/tags";

const initialStatus = {
  loading: false,
  hasNextPage: true,
  page: 1,
  error: false,
  items: [],
  hasStarted: false,
}

const initialFilters = {
  radius: 5,
  search: "",
  grade: 0,
  tags: "",
}

const Home = () => {

  const [loadingStatus, setLoadingStatus] = useState(initialStatus);
  const [filters, setFilters] = useState(initialFilters);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTagsInfo = async () => {
      try {
        const result = await getTags();
        setTags(result.data)
      } catch(error) {
        console.warn(error);
      }
    }
    getTagsInfo();
  }, [])

  const loadSchools = async (currentItems=loadingStatus.items, page=loadingStatus.page, currentFilters=filters) => {
    if(loadingStatus.loading) return;
    setLoadingStatus({...loadingStatus, loading: true, items: currentItems})
    try {
      const result = await getSchools(page, currentFilters)
      setLoadingStatus({
        ...loadingStatus,
        loading: false,
        error: false,
        hasNextPage: result.data.hasNextPage,
        page: page + 1,
        items: [...currentItems, ...result.data.docs],
        hasStarted: true,
      })
    } catch(error) {
      console.warn(error);
      setLoadingStatus({...loadingStatus, loading: false, error: true})
    }
  }

  const onChangeUseLocation = (e) => {
    const shouldUseLocation = e.target.checked;
    if(!shouldUseLocation) {
      setFilters({...filters,coordinates: ""})
      return;
    }
    if(filters.coordinates) return;
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const coordinates = `${position.coords.latitude},${position.coords.longitude}`
        setFilters({...filters,coordinates});
        loadSchools([], 1, {...filters,coordinates});
      })
    }
  }

  /* useEffect(() => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const coordinates = `${position.coords.latitude},${position.coords.longitude}`
        setFilters({...filters,coordinates})
        loadSchools([], 1, {...filters,coordinates});
      })
    }
  }, []) */

  const onSearch = async () => {
    setLoadingStatus({...initialStatus})
    loadSchools([], 1);
  }

  const [sentryRef] = useInfiniteScroll({
    loading: loadingStatus.loading,
    hasNextPage: loadingStatus.hasNextPage,
    onLoadMore: loadSchools,
    disabled: !!loadingStatus.error,
  });

  if(filtersOpen) {
    return (
      <Filter 
        setFiltersOpen={setFiltersOpen}
        filters={filters}
        setFilters={setFilters}
        tags={tags}
      />
    )
  }

  if(selectedSchool) {
    return (
      <SchoolDetails
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
      />
    )
  }

  return (
    <HomePage
      loadingStatus={loadingStatus}
      filters={filters}
      setFilters={setFilters}
      onChangeUseLocation={onChangeUseLocation}
      onSearch={onSearch}
      sentryRef={sentryRef}
      setSelectedSchool={setSelectedSchool}
      setFiltersOpen={setFiltersOpen}
    />
  )

}

export default Home;