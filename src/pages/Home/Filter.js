import { ButtonLabel, ButtonPrimary, ImageButton } from "../../components/Button";
import { SmallTag, Tag, Tags } from "../../components/Tags";
import { StyledFilter } from "./Filter.styles";
import back from '../../assets/back.png'
import { Label, RangeSlider, StarInput, TagInput } from "../../components/Inputs";
import React, { useEffect, useState } from "react";
import star from '../../assets/star2.png'
import starOutline from '../../assets/star-outline.png'

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
      <div>
        <p className="info-text">Você pode refinar sua busca ajustando os filtros abaixo</p>
        <section>
          <Label>
            Distância máxima da sua casa
            <RangeSlider>
              <input type="range"
                value={applyingFilters.radius}
                onChange={onChangeRadius}
                min={1}
                max={50}
                step={1}
              />
            </RangeSlider>
            <div className="selected-distance">
              {applyingFilters.radius}km
            </div>
          </Label>
        </section>
        <section className="form-section">
          Nota mínima
          <div className="star-group">
              <StarInput icon={Number(applyingFilters.grade) >= 1 ? star : starOutline}>
                <input type="radio" name="grade" value="1"
                  checked={applyingFilters.grade === "1"}
                  onChange={onChangeGrade}
                />
              <ButtonLabel>1</ButtonLabel>
              </StarInput>
              <StarInput icon={applyingFilters.grade >= 2 ? star : starOutline}>
              <input type="radio" name="grade" value="2" 
                checked={applyingFilters.grade === "2"}
                onChange={onChangeGrade}
              /><ButtonLabel>2</ButtonLabel>
              </StarInput>
              <StarInput icon={applyingFilters.grade >= 3 ? star : starOutline}>
              <input type="radio" name="grade" value="3" 
                checked={applyingFilters.grade === "3"}
                onChange={onChangeGrade}
              /><ButtonLabel>3</ButtonLabel>
              </StarInput>
              <StarInput icon={applyingFilters.grade >= 4 ? star : starOutline}>
              <input type="radio" name="grade" value="4" 
                checked={applyingFilters.grade === "4"}
                onChange={onChangeGrade}
              /><ButtonLabel>4</ButtonLabel>
              </StarInput>
              <StarInput icon={applyingFilters.grade >= 5 ? star : starOutline}>
              <input type="radio" name="grade" value="5" 
                checked={applyingFilters.grade === "5"}
                onChange={onChangeGrade}
              /><ButtonLabel>5</ButtonLabel>
              </StarInput>
          </div>
        </section>
        <section className="form-section tag-section">
            Tags
            <div className="tag-group">

            {tags.map((tag, index) => (
              <React.Fragment key={tag._id}>
              <TagInput
                bg={isTagChecked(tag._id) ? tag.color : null}
              >
                <input type="checkbox" 
                  value={tag._id}
                  checked={isTagChecked(tag._id)}
                  onChange={onChangeTags}
                /> {tag.name}
              </TagInput>
              {(index + 1) % 3 === 0 ? (<br/>) : null}
              </React.Fragment>
            ))}
            </div>

        </section>
        <footer>
          <ButtonPrimary onClick={applyFilters} className="submit-btn">
            Aplicar
          </ButtonPrimary>
        </footer>
      </div>
    </StyledFilter>
  )
}

export default Filter;