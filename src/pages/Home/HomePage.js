import { StyledHome } from "./HomePage.styles";
import { ButtonLabel, ButtonPrimary, ImageButton, LinkButton } from "../../components/Button";
import SchoolCard from "../../components/SchoolCard/SchoolCard";
import { Label, TextInput, ToggleSwitch } from "../../components/Inputs";
import filter from "../../assets/filter.png";
import userIcon from "../../assets/user.png";
import locationGray from "../../assets/location-gray.png";
import locationIcon from "../../assets/location.png";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

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
    if(value === "") return null;
    let tagsArray = value.split(",");
    tagsArray = tagsArray.map(item => {
      const currentTag = tags.find(tag => tag._id === item);
      return currentTag.name;
    })
    content = tagsArray.join(", ");
  }

  if(key == "grade") {
    if(value < 2) {
      content += " estrela"
    } else {
      content += " estrelas"
    }
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

  const { userInfo } = useContext(UserContext);

  return (
    <StyledHome>
      <header>
        <h1>
          AGNES <span>escolas</span>
        </h1>
        <Link to="/entrar">
          <ImageButton
            icon={userIcon}
            size="32px"
            onClick={() => {}}
          >
            <ButtonLabel>entrar</ButtonLabel>
          </ImageButton>
        </Link>
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
          <span className="text">Buscar uma escola</span>
          
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
        <h2 className="filters-title">Filtros aplicados</h2>
        <ul className="filters">
          {Object.entries(currentFilters.filters)
            .map(([key, value]) => 
              renderFilter(key,value, filters.coordinates, tags))}
        </ul>
        <LinkButton onClick={cleanFilters}>Limpar filtros</LinkButton>
        </>
      ) : null}

      <ButtonPrimary className="search-btn" onClick={onSearch}>Buscar</ButtonPrimary>

      {userInfo && userInfo.school && (
        <section>
          <h2>Minha escola</h2>
          <SchoolCard 
            info={userInfo.school}
            location={filters.coordinates ? filters.coordinates.split(",") : null}
            setSelectedSchool={setSelectedSchool}
            tags={tags}
            mySchool
          >
          </SchoolCard>
        </section>
      )}

      <section>
        <h2>Lista de escolas</h2>
        <ul>
          {loadingStatus.items.map(school => (
            <SchoolCard 
              info={school}
              location={filters.coordinates ? filters.coordinates.split(",") : null}
              key={`school-${school._id}`}
              setSelectedSchool={setSelectedSchool}
              tags={tags}
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