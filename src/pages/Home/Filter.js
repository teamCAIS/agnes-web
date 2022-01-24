import { ButtonLabel, ButtonPrimary, ImageButton } from "../../components/Button";
import { SmallTag, Tag, Tags } from "../../components/Tags";
import { StyledFilter } from "./Filter.styles";
import back from '../../assets/back.png'
import { Label } from "../../components/Inputs";
import React, { useEffect, useState } from "react";

const Filter = ({
    setFiltersOpen,
    filters,
    setFilters,
    tags,
    setCurrentFilters,
    currentFilters,
    loadSchools,
  }) => {

  const [applyingFilters, setApplyingFilters] = useState({tags: [], radius: 5, grade: 0});

  useEffect(() => {
    setApplyingFilters(currentFilters.filters);
  }, [])

  const onChangeGrade = e => {
    setApplyingFilters({...applyingFilters, grade:e.target.value});
  }

  const onChangeRadius = e => {
    setApplyingFilters({...applyingFilters, radius: e.target.value});
  }

  const isTagChecked = (tagId) => {
    return applyingFilters.tags.includes(tagId);
  }

  const onChangeTags = e => {
    const tagId = e.target.value;
    const checked = isTagChecked(tagId);
    if(!applyingFilters.tags) {
      setApplyingFilters({ ...applyingFilters, tags: `${tagId}` });
      return;
    }
    if(checked) {
      //remove tagId from string
      const tagsArray = applyingFilters.tags.split(",");
      const tagsString = tagsArray
        .filter(tag => tag !== tagId)
        .join(",");
        setApplyingFilters({ ...applyingFilters, tags: tagsString });
      return;
    }
    //add tagIg at the end of the string
    const tagsString = `${applyingFilters.tags},${tagId}`;
    setApplyingFilters({ ...applyingFilters, tags: tagsString });
  }

  const applyFilters = () => {
    setCurrentFilters({
      isFiltering: true,
      filters: applyingFilters,
    });
    setFilters({ ...filters, ...applyingFilters});
    setFiltersOpen(false);
    loadSchools([], 1, {...filters, ...applyingFilters});
  }

  const goBack = () => {
    setFiltersOpen(false);
  }

  return (
    <StyledFilter>
      <header className="app-bar">
        <h1>Filtros</h1>
        <ImageButton 
          icon={back}
          size="16px"
          className="back-btn"
          onClick={goBack}
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
              value={applyingFilters.radius}
              onChange={onChangeRadius}
              min={1}
              max={50}
              step={1}
            />
            {applyingFilters.radius}
          </Label>
        </section>
        <section>
          <Label>
            Nota mínima
            <input type="radio" name="grade" value="1"
              checked={applyingFilters.grade === "1"}
              onChange={onChangeGrade}
            />1
            <input type="radio" name="grade" value="2" 
              checked={applyingFilters.grade === "2"}
              onChange={onChangeGrade}
            />2
            <input type="radio" name="grade" value="3" 
              checked={applyingFilters.grade === "3"}
              onChange={onChangeGrade}
            />3
            <input type="radio" name="grade" value="4" 
              checked={applyingFilters.grade === "4"}
              onChange={onChangeGrade}
            />4
            <input type="radio" name="grade" value="5" 
              checked={applyingFilters.grade === "5"}
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
        <footer>
          <ButtonPrimary onClick={applyFilters}>Aplicar</ButtonPrimary>
        </footer>
      </main>
    </StyledFilter>
  )
}

export default Filter;