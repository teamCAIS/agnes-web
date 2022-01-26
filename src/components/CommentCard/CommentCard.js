import styled from "styled-components";
import { iconBeforeStyles } from "../../styles/mixins";
import calendarIcon from '../../assets/calendar.png';
import starIcon from '../../assets/star.png';

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

  p {
    white-space: initial;
    margin-bottom: 0;
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
    .date::before {
      background-image: url(${calendarIcon});
    }
  }

  .tags {
    margin-top: 1rem;
    li {
      margin-top: 0.5rem;
    }
  }
  
`;

const CommentCard = ({comment}) => {

  return (
    <StyledCard>
      <h3>Anônimo</h3>
      <ul className="info">
        <li className="grade">4,5</li>
        <li className="date">16/jan/2022</li>
      </ul>
      <p>Lorem ipsum dolor site amet, consectur adipiscint elit. Integer massa duis ipsum faucibus volutpat scelerisque</p>
    </StyledCard>
  )
}

export default CommentCard;