import { StyledHome } from "./HomePage.styles";
import { ButtonPrimary } from "../../components/Button";
import SchoolCard from "../../components/SchoolCard/SchoolCard";
import { Label, TextInput } from "../../components/Inputs";


const HomePage = ({
    loadingStatus,
    filters,
    setFilters,
    onChangeUseLocation,
    onSearch,
    sentryRef,
    setSelectedSchool,
  }) => {

  return (
    <StyledHome>
      <header>
      <h1>
        projeto AGNES
      </h1>
      
      </header>
      <Label>
        Pesquise uma escola
        <TextInput 
          value={filters.search}
          onChange={e => setFilters({...filters, search: e.target.value})}
        />
      </Label>
      <Label>
        Usar sua localização
        <input type="checkbox" onChange={onChangeUseLocation} />
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
              setSelectedSchool={setSelectedSchool}
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