import { ButtonLabel, ImageButton } from "../../components/Button";
import { SmallTag, Tags } from "../../components/Tags";
import { StyledFilter } from "./Filter.styles";
import back from '../../assets/back.png'

const Filter = ({
    setFiltersOpen
  }) => {

  return (
    <StyledFilter>
      <header className="app-bar">
        <h1>Filtros</h1>
        <ImageButton 
          icon={back}
          size="16px"
          className="back-btn"
          onClick={() => setFiltersOpen(false)}
        >
          <ButtonLabel>voltar</ButtonLabel>
        </ImageButton>
      </header>
    </StyledFilter>
  )
}

export default Filter;