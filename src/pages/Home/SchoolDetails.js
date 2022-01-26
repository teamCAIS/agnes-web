import { ButtonLabel, ImageButton } from "../../components/Button";
import { getTagBG, getTagName, SmallTag, Tags } from "../../components/Tags";
import { StyledSchoolDetails } from "./SchoolDetails.styles";
import back from '../../assets/back.png'
import CommentCard from "../../components/CommentCard/CommentCard";

const SchoolDetails = ({school,setSelectedSchool,tags}) => {

  return (
    <StyledSchoolDetails>
      <header>
        <h1>{school.name}</h1>
        <ImageButton 
          icon={back}
          size="16px"
          className="back-btn"
          onClick={() => setSelectedSchool(null)}
        >
          <ButtonLabel>voltar</ButtonLabel>
        </ImageButton>
      </header>

      <div className="map">
          <ul className="tags">
            {school.tags.map(tag => (
              <SmallTag bg={getTagBG(tag, tags)}>
                {getTagName(tag, tags)}
              </SmallTag>
            ))}
          </ul>      
      </div>

        <div className="content">

        <section className="info">
          <h2>Endereço</h2>
          <p className="address">{school.address}</p>
          <div className="overall-grade">
            {school.grade}
          </div>
        </section>

        <section className="comments">

          <h2>Comentários (2)</h2>
          
          <CommentCard />
          <CommentCard />

        </section>
      </div>
    </StyledSchoolDetails>
  )
}

export default SchoolDetails;
