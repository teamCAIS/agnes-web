import styled from "styled-components";
import { getDistance } from "../../helpers/location";

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
    display: flex;
    flex-wrap: no-wrap;
    li {
      margin-right: 0.5rem;
      border-radius: 16px;
      background: var(--color-line);
      padding: 4px 8px;
    }
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
    <StyledCard>
      <h3>{info.name.toLowerCase()}</h3>
      <ul className="info">
        {distance !== null ? (
          <li>{distance}km</li>
        ) : null}
        <li>4,5</li>
      </ul>
      <ul className="tags">
        <li>
          Nome Social
        </li>
        <li>
          Banheiro inclusivo
        </li>
      </ul>
    </StyledCard>
  )
}

export default SchoolCard;
