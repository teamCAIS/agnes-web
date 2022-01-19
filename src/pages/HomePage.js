import { useEffect, useState } from "react";
import { getSchools } from "../api/schools";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { StyledHome } from "./HomePage.styles";
import { ButtonPrimary } from "../components/Button";
import SchoolCard from "../components/SchoolCard/SchoolCard";
import { getDistance } from "../helpers/location";

const initialStatus = {
  loading: false,
  hasNextPage: true,
  page: 1,
  error: false,
  items: [],
  hasStarted: false,
}

const HomePage = () => {

  const [loadingStatus, setLoadingStatus] = useState(initialStatus)
  const [filters, setFilters] = useState({radius:5})

  console.log(loadingStatus);

  const loadSchools = async (currentItems=loadingStatus.items, page=loadingStatus.page, currentFilters=filters) => {
    console.log("*** loadSchools ***");
    if(loadingStatus.loading) return;
    setLoadingStatus({...loadingStatus, loading: true, items: currentItems})
    try {
      console.log("*** starting new load ***");
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

  useEffect(() => {
    console.log("Beggin hook");
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        const coordinates = `${position.coords.latitude},${position.coords.longitude}`
        setFilters({...filters,coordinates})
        loadSchools([], 1, {...filters,coordinates});
      })
    }
    console.log("End hook");
  }, [])

  const onSearch = async () => {
    setLoadingStatus({...initialStatus})
    loadSchools([], 1);
  }

  const [sentryRef] = useInfiniteScroll({
    loading: loadingStatus.loading,
    hasNextPage: loadingStatus.hasNextPage,
    onLoadMore: loadSchools,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!loadingStatus.error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    //rootMargin: '0px 0px 400px 0px',
  });

  return (
    <StyledHome>
      <header>
      <h1>
        Bem-vinde ao projeto AGNES
      </h1>
      <p>
      Nós queremos ajudar você e outros estudantes a encontrar escolas que estejam melhor preparadas para apoiar a causa trans. Abaixo você pode buscar por escolas e ver mais informações sobre elas
      </p>
      </header>
      <ButtonPrimary onClick={onSearch}>Buscar</ButtonPrimary>
      <section>
        <h2>Lista de escolas</h2>
        <ul>
          {loadingStatus.items.map(school => (
            <SchoolCard 
              info={school} 
              key={`school-${school._id}`}
            >
            </SchoolCard>
          ))}
        </ul>
        {(loadingStatus.loading || loadingStatus.hasStarted) && (loadingStatus.hasNextPage) && (
          <p ref={sentryRef}>Carregando...</p>
        )}
      </section>
    </StyledHome>
  )

}

export default HomePage;