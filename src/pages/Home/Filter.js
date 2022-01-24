import { ButtonLabel, ImageButton } from "../../components/Button";
import { SmallTag, Tag, Tags } from "../../components/Tags";
import { StyledFilter } from "./Filter.styles";
import back from '../../assets/back.png'
import { Label } from "../../components/Inputs";
import React from "react";

const Filter = ({
    setFiltersOpen,
    filters,
    setFilters,
    tags,
  }) => {

  const onChangeGrade = e => {
    setFilters({...filters, grade:e.target.value});
  }

  const onChangeRadius = e => {
    setFilters({...filters, radius: e.target.value});
  }

  const isTagChecked = (tagId) => {
    return filters.tags.includes(tagId);
  }

  const onChangeTags = e => {
    const tagId = e.target.value;
    const checked = isTagChecked(tagId);
    if(!filters.tags) {
      setFilters({ ...filters, tags: `${tagId}` });
      return;
    }
    if(checked) {
      //remove tagId from string
      const tagsArray = filters.tags.split(",");
      const tagsString = tagsArray
        .filter(tag => tag !== tagId)
        .join(",");
      setFilters({ ...filters, tags: tagsString });
      return;
    }
    //add tagIg at the end of the string
    const tagsString = `${filters.tags},${tagId}`;
    setFilters({ ...filters, tags: tagsString });
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
            {tags.map(tag => (
              <React.Fragment key={tag._id}>
                <input type="checkbox" 
                  value={tag._id}
                  checked={isTagChecked(tag._id)}
                  onChange={onChangeTags}
                /> {tag.name}
              </React.Fragment>
            ))}
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