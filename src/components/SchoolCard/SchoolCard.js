import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDistance } from "../../helpers/location";
import { iconBeforeStyles } from "../../styles/mixins";
import { Tag, Tags, getTagName, getTagBG } from "../Tags";
import distanceIcon from '../../assets/distance.png';
import starIcon from '../../assets/star.png';

const StyledCard = styled.li`
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
    margin-top: 1rem;
    li {
      margin-top: 0.5rem;
    }
  }
  
`;

const SchoolCard = ({info, location, setSelectedSchool, tags}) => {

  let distance = null;

  if(location) {
    const [lat1, lon1] = location
    const [lon2, lat2] = info.location.coordinates.reverse();
    distance = getDistance(lat1, lon1, lat2, lon2).toFixed(1).replace(".", ",");
  }

  return (
    // <Link to="/escola/detalhes">
    <StyledCard onClick={() => setSelectedSchool(info)}>
      <h3>{info.name.toLowerCase()}</h3>
      <ul className="info">
        {distance !== null ? (
          <li className="distance">{distance}km</li>
        ) : null}
        <li className="grade">{info.grade}</li>
      </ul>
      {info.tags.length > 0 ? (
        <ul className="tags">
        {info.tags.slice(0, 2).map(tag => (
          <Tag 
            key={`tag=${tag._id}&school=${info._id}`}
            bg={getTagBG(tag, tags)}
          >
            {getTagName(tag, tags)}
          </Tag>
        ))}
        </ul>
      ) : null}
    </StyledCard>
    // </Link>
  )
}

export default SchoolCard;
