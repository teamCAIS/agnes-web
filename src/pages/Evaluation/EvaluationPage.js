import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { ButtonLabel, ButtonPrimary, ImageButton } from "../../components/Button";
import { InputGroup, Label, StarInput, TagInput, Textarea, TextInput } from "../../components/Inputs";
import UserContext from "../../contexts/UserContext";
import back from '../../assets/back.png'
import { StyledEvaluation } from "./EvaluationPage.styles";
import star from '../../assets/star2.png'
import starOutline from '../../assets/star-outline.png'
import { getTags } from "../../api/tags";
import { evaluate, getSchools } from "../../api/schools";
import { Snackbar } from "../../components/Feedbacks";

const EvaluationPage = () => {

  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [grade, setGrade] = useState(0);
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getTagsInfo = async () => {
      try {
        const result = await getTags();
        setTags(result.data)
      } catch(error) {
        console.warn(error);
      }
    }
    getTagsInfo();
  }, [])

  const doEvaluate = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        grade,
        comment,
        tags: tagsSelected,
        student: userInfo._id,
        school: userInfo.school._id,
      }
      console.log(payload);
      const result = await evaluate(payload, userInfo.token);
      console.log(result.data);
      setSuccess(true);

      const schools = await getSchools(1, {search: userInfo.school.name})
      const newSchool = schools.data.docs.find(item => item._id === userInfo.school._id);
      if(newSchool) {
        setUserInfo({...userInfo, school: newSchool});
        localStorage.setItem("agnesUser", JSON.stringify({...userInfo, school: newSchool}));
        navigate("/");
      }

      /* setTimeout(() => {
        setSuccess(false);
        setTimeout(() => {
          navigate("/");
        }, 1000)
      }, 2000) */
    } catch(err) {
      console.warn(err);
    }

  }

  const isTagChecked = (tagId) => {
    return tagsSelected.includes(tagId);
  }

  const onChangeTags = e => {
    const tagId = e.target.value;
    if(tagsSelected.includes(tagId)) {
      const newTags = tagsSelected.filter(item => item !== tagId);
      setTagsSelected(newTags);
      return;
    }
    setTagsSelected([...tagsSelected, tagId])
  }
  
  return (
    <StyledEvaluation className="page">
      <header className="app-bar">
        <h1>Avaliar escola</h1>
        <ImageButton 
          icon={back}
          size="16px"
          className="back-btn"
          onClick={() => navigate('/')}
        >
          <ButtonLabel>voltar</ButtonLabel>
        </ImageButton>
      </header>
      <div>
        <p className="info-text">O que você acha de <strong>{userInfo?.school?.name}</strong>?</p>
        
        <section className="form-section">
          <h2>Como avaliaria essa escola?</h2>
          <InputGroup center>
              <StarInput icon={grade >= 1 ? star : starOutline}>
                <input type="radio" name="grade" value="1"
                  checked={grade == "1"}
                  onChange={e => setGrade(e.target.value)}
                />
              <ButtonLabel>1</ButtonLabel>
              </StarInput>
              <StarInput icon={grade >= 2 ? star : starOutline}>
              <input type="radio" name="grade" value="2" 
                checked={grade == "2"}
                onChange={e => setGrade(e.target.value)}
              /><ButtonLabel>2</ButtonLabel>
              </StarInput>
              <StarInput icon={grade >= 3 ? star : starOutline}>
              <input type="radio" name="grade" value="3" 
                checked={grade == "3"}
                onChange={e => setGrade(e.target.value)}
              /><ButtonLabel>3</ButtonLabel>
              </StarInput>
              <StarInput icon={grade >= 4 ? star : starOutline}>
              <input type="radio" name="grade" value="4" 
                checked={grade == "4"}
                onChange={e => setGrade(e.target.value)}
              /><ButtonLabel>4</ButtonLabel>
              </StarInput>
              <StarInput icon={grade >= 5 ? star : starOutline}>
              <input type="radio" name="grade" value="5" 
                checked={grade == "5"}
                onChange={e => setGrade(e.target.value)}
              /><ButtonLabel>5</ButtonLabel>
              </StarInput>
          </InputGroup>
        </section>
        <section className="form-section">
            <h2>O que ela faz bem?</h2>
            <InputGroup>

            {tags.map((tag, index) => (
              <React.Fragment key={tag._id}>
              <TagInput
                checked={isTagChecked(tag._id)}
              >
                <input type="checkbox" 
                  value={tag._id}
                  checked={isTagChecked(tag._id)}
                  onChange={onChangeTags}
                /> {tag.name}
              </TagInput>
              </React.Fragment>
            ))}
            </InputGroup>

        </section>
        <section className="form-section">
            <h2>Gostaria de comentar mais?</h2>
            <Textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              rows={5}
            >
            </Textarea>
        </section>
        <footer>
          <ButtonPrimary onClick={doEvaluate} className="submit-btn">
            Enviar avaliação
          </ButtonPrimary>
        </footer>
      </div>
      {success && (
        <Snackbar success>Avaliação enviada com sucesso!</Snackbar>
      )}
    </StyledEvaluation>
  )
}

export default EvaluationPage;
