import { ButtonLabel, ImageButton } from "../../components/Button";
import { SmallTag, Tag, Tags } from "../../components/Tags";
import { StyledFilter } from "./Filter.styles";
import back from '../../assets/back.png'
import { Label } from "../../components/Inputs";

const Filter = ({
    setFiltersOpen,
    filters,
    setFilters,
  }) => {

  const onChangeGrade = e => {
    setFilters({...filters, grade:e.target.value});
  }

  const onChangeRadius = e => {
    setFilters({...filters, radius: e.target.value});
  }

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
      <main>
        <p>Você pode refinar sua busca ajustando os filtros abaixo</p>
        <section>
          <Label>
            Distância máxima da sua casa
            <input type="range"
              value={filters.radius}
              onChange={onChangeRadius}
              min={1}
              max={50}
              step={1}
            />
            {filters.radius}
          </Label>
        </section>
        <section>
          <Label>
            Nota mínima
            <input type="radio" name="grade" value="1"
              checked={filters.grade === "1"}
              onChange={onChangeGrade}
            />1
            <input type="radio" name="grade" value="2" 
              checked={filters.grade === "2"}
              onChange={onChangeGrade}
            />2
            <input type="radio" name="grade" value="3" 
              checked={filters.grade === "3"}
              onChange={onChangeGrade}
            />3
            <input type="radio" name="grade" value="4" 
              checked={filters.grade === "4"}
              onChange={onChangeGrade}
            />4
            <input type="radio" name="grade" value="5" 
              checked={filters.grade === "5"}
              onChange={onChangeGrade}
            />5
          </Label>
        </section>
        <section>
          <Label>
            Tags
            <input type="checkbox" /> Banheiro inclusivo
            <input type="checkbox" /> Nome social
            {/* <Tags>
              <Tag>Banheiro inclusivo</Tag>
              <Tag>Nome social</Tag>
            </Tags> */}
          </Label>
        </section>
      </main>
    </StyledFilter>
  )
}

export default Filter;