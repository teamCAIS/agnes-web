import styled from "styled-components";
import { iconBeforeStyles } from "../../styles/mixins";
import calendarIcon from '../../assets/calendar.png';
import starIcon from '../../assets/star.png';

const StyledCard = styled.li`
  background: var(--color-base);
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
    font-size: 1rem;
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

  const createdAt =  new Date(comment.createdAt);
  const day = createdAt.toLocaleDateString('pt-br', {day:'2-digit'});
  const month = createdAt.toLocaleDateString('pt-br', {month: 'short'});
  const year = createdAt.toLocaleDateString('pt-br', {year:'numeric'});

  const dateString = `${day}/${month.slice(0,-1)}/${year}`;

  return (
    <StyledCard>
      <h3>Anônimo</h3>
      <ul className="info">
        <li className="grade">{comment.grade}</li>
        <li className="date">{dateString}</li>
      </ul>
      <p>{comment.comment}</p>
    </StyledCard>
  )
}

export default CommentCard;