import styled from "styled-components";

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

const SchoolCard = ({info, distance}) => {

  return (
    <StyledCard>
      <h3>{info.name}</h3>
      <ul className="info">
        <li>2km</li>
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
