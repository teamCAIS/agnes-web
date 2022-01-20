import { useEffect, useState } from "react";
import { getSchools } from "../api/schools";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { StyledHome } from "./HomePage.styles";
import { ButtonPrimary } from "../components/Button";
import SchoolCard from "../components/SchoolCard/SchoolCard";
import { Label, TextInput } from "../components/Inputs";

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
  const [filters, setFilters] = useState({radius:5, search: ""})


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

  useEffect(() => {
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const coordinates = `${position.coords.latitude},${position.coords.longitude}`
        setFilters({...filters,coordinates})
        loadSchools([], 1, {...filters,coordinates});
      })
    }
  }, [])

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

  return (
    <StyledHome>
      <header>
      <h1>
        {!loadingStatus.hasStarted ? (
          <span>Bem-vinde ao{" "}</span>
        ) : null}
        projeto AGNES
      </h1>
      {!loadingStatus.hasStarted ? (
        <p>
        Nós queremos ajudar você e outros estudantes a encontrar escolas que estejam melhor preparadas para apoiar a causa trans. Abaixo você pode buscar por escolas e ver mais informações sobre elas
        </p>
      ) : null}
      
      </header>
      <Label>
        Usar nome da escola
        <TextInput 
          value={filters.search}
          onChange={e => setFilters({...filters, search: e.target.value})}
        />
      </Label>
      <ButtonPrimary onClick={onSearch}>Buscar</ButtonPrimary>
      <section>
        <h2>Lista de escolas</h2>
        <ul>
          {loadingStatus.items.map(school => (
            <SchoolCard 
              info={school}
              location={filters.coordinates ? filters.coordinates.split(",") : null}
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