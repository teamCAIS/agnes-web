import { ButtonLabel, ImageButton } from "../../components/Button";
import { getTagBG, getTagName, SmallTag, Tags } from "../../components/Tags";
import { StyledSchoolDetails } from "./SchoolDetails.styles";
import back from '../../assets/back.png'
import CommentCard from "../../components/CommentCard/CommentCard";
import { useEffect } from "react";
import mappic from '../../assets/map.jpg';
import { getMapLink, getMapUrl } from "../../api/maps";

const SchoolDetails = ({school,setSelectedSchool,tags, location}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <StyledSchoolDetails>
      <header>
        <h1>Detalhes da escola</h1>
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
        <a href={getMapLink(school.location.coordinates[1], school.location.coordinates[0])}
          target="_blank"
          rel="noreferrer"
        >
        <img 
          src={getMapUrl(school.location.coordinates[1], school.location.coordinates[0])}
          // src={mappic}
          alt={`Localização da escola ${school.name}`}
        />
        </a>
          <ul className="tags">
            {school.tags.map(tag => (
              <SmallTag>
                {getTagName(tag, tags)}
              </SmallTag>
            ))}
          </ul>      
      </div>

        <div className="content">

        <section>
          <h2 className="school-name">{school.name}</h2>
          <ul className="info">
            {school.distance ? (
              <li className="distance">{school.distance}km</li>
            ) : null}
            <li className="grade">{school.grade}</li>
          </ul>
          <p className="address">{school.address}</p>
        </section>

        <section className="comments">

          <h2>Comentários <span>(2)</span></h2>
          
          <CommentCard />
          <CommentCard />

        </section>
      </div>
    </StyledSchoolDetails>
  )
}

export default SchoolDetails;
