import { Link } from "react-router-dom";
import styled from "styled-components";
import { getDistance } from "../../helpers/location";
import { Tag, Tags } from "../Tags";

const StyledCard = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.25);
  white-space: nowrap;
  overflow: hidden;

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
    }
  }

  .tags {
    margin-top: 1rem;
  }
  
`;

const SchoolCard = ({info, location}) => {

  let distance = null;

  if(location) {
    const [lat1, lon1] = location
    const [lon2, lat2] = info.location.coordinates.reverse();
    distance = getDistance(lat1, lon1, lat2, lon2).toFixed(1).replace(".", ",");
  }

  return (
    <Link to="/escola/detalhes">
    <StyledCard>
      <h3>{info.name.toLowerCase()}</h3>
      <ul className="info">
        {distance !== null ? (
          <li>{distance}km</li>
        ) : null}
        <li>4,5</li>
      </ul>
      <Tags className="tags">
        <Tag>
          Nome Social
        </Tag>
        <Tag>
          Banheiro inclusivo
        </Tag>
      </Tags>
    </StyledCard>
    </Link>
  )
}

export default SchoolCard;
