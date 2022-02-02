import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDistance } from "../../helpers/location";
import { iconBeforeStyles } from "../../styles/mixins";
import { Tag, Tags, getTagName, getTagBG } from "../Tags";
import distanceIcon from '../../assets/distance.png';
import starIcon from '../../assets/star.png';
import { ButtonPrimary } from "../Button";

const StyledCard = styled.li`
  background: var(--color-base);
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.25);
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    text-transform: capitalize;
    font-size: 1rem;
  }
  
  .info {
    display: flex;
    color: var(--color-gray);
    margin-top: 0.5rem;
    li {
      margin-right: 1rem;
      &::before {
        ${iconBeforeStyles}
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 0.375rem;
      }
    }

    .grade::before {
      background-image: url(${starIcon});
    }
    .distance::before {
      background-image: url(${distanceIcon});
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-top: 0.5rem;
    }
  }

  .evaluation-btn {
    margin-top: 1rem;
  }
  
`;

const SchoolCard = ({info, location, setSelectedSchool, tags, mySchool}) => {


  return (
    // <Link to="/escola/detalhes">
    <StyledCard onClick={() => setSelectedSchool(info)}>
      <h3>{info.name.toLowerCase()}</h3>
      <ul className="info">
        {location ? (
          <li className="distance">{info.distance}km</li>
        ) : null}
        <li className="grade">{info.grade}</li>
      </ul>
      {info.tags.length > 0 ? (
        <ul className="tags">
        {info.tags.slice(0, 2).map(tag => (
          <Tag 
            key={`tag=${tag._id}&school=${info._id}`}
          >
            {getTagName(tag, tags)}
          </Tag>
        ))}
        </ul>
      ) : null}

      {mySchool && (
        <Link to='/avaliar'>
          <ButtonPrimary className="evaluation-btn">Avaliar</ButtonPrimary>
        </Link>
      )}

    </StyledCard>
    // </Link>
  )
}

export default SchoolCard;
