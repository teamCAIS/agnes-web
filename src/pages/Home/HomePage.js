import { StyledHome } from "./HomePage.styles";
import { ButtonLabel, ButtonPrimary, ImageButton, LinkButton } from "../../components/Button";
import SchoolCard from "../../components/SchoolCard/SchoolCard";
import { Label, TextInput, ToggleSwitch } from "../../components/Inputs";
import filter from "../../assets/filter.png"
import locationGray from "../../assets/location-gray.png";
import locationIcon from "../../assets/location.png";

const renderFilter = (key, value, locationEnabled, tags) => {
  let label = "Nota";
  let content = value;
  if(key === "radius") {
    label = "Distância máxima";
    content += "km"
    if(!locationEnabled) return null;
  }

  if(key === "tags") {
    label = "Tags";
    let tagsArray = value.split(",");
    tagsArray = tagsArray.map(item => {
      const currentTag = tags.find(tag => tag._id === item);
      return currentTag.name;
    })
    content = tagsArray.join(", ");
  }

  return (
    <li className={`${key}`}>
      <b>{label}:</b>{" "}{content}
    </li>
  )

}

const HomePage = ({
    loadingStatus,
    filters,
    setFilters,
    onChangeUseLocation,
    onSearch,
    sentryRef,
    setSelectedSchool,
    setFiltersOpen,
    currentFilters,
    cleanFilters,
    tags,
  }) => {

  return (
    <StyledHome>
      <header>
        <h1>
          projeto AGNES
        </h1>
      </header>
      <div className="content">
      <div className="search-field">
        <ImageButton
          icon={filter}
          background
          size="32px"
          onClick={() => setFiltersOpen(true)}
        >
          <ButtonLabel>filtros</ButtonLabel>
        </ImageButton>
        <Label>
          Pesquise uma escola
          
          <TextInput 
            value={filters.search}
            onChange={e => setFilters({...filters, search: e.target.value})}
          />
          
        </Label>
      </div>
      <ToggleSwitch icon={locationGray} iconChecked={locationIcon}>
        <input type="checkbox" onChange={onChangeUseLocation} />
        <span>Usar sua localização
          <span className="slider"></span>
        </span>
      </ToggleSwitch>

      
      {currentFilters.isFiltering ? (
        <>
        <h2>Filtros aplicados</h2>
        <ul className="filters">
          {Object.entries(currentFilters.filters)
            .map(([key, value]) => 
              renderFilter(key,value, filters.coordinates, tags))}
        </ul>
        <LinkButton onClick={cleanFilters}>Limpar filtros</LinkButton>
        </>
      ) : null}

      <ButtonPrimary className="search-btn" onClick={onSearch}>Buscar</ButtonPrimary>
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
      </div>
    </StyledHome>
  )

}

export default HomePage;