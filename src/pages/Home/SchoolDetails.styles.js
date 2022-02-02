import styled from 'styled-components';
import star from '../../assets/star2.png';
import { iconBeforeStyles } from '../../styles/mixins';
import distanceIcon from '../../assets/distance.png';
import starIcon from '../../assets/star.png';

export const StyledSchoolDetails = styled.main`
  max-width: 700px;
  margin: auto;

  h1 {
    font-size: 1.125rem;
  }

  h2.school-name {
    margin: 0;
  }

  header {
    
    padding: 18px var(--app-margin);
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: left;
    background: var(--color-bg-transparent);
    position: fixed;
    z-index: 1;

    .back-btn {
      margin-right: var(--app-margin);
    }
  }

  .map {
    min-height: 250px;
    background-color: var(--color-line);
    display: flex;
    align-items: end;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }

  .tags {
    z-index: 1;
    padding: 1rem;
    overflow: auto;
    white-space: nowrap;

    & > * {
      display: inline-block;
    }
  }

  .content {
    padding: 0 var(--app-margin);
  }

  section {
    position: relative;
    padding: 1rem 0;
  }

  .overall-grade {
    position: absolute;
    top: var(--app-margin);
    right: var(--app-margin);
    font-size: 1.125rem;
    font-weight: 600;
    &::before {
      ${iconBeforeStyles}
      background-image: url(${star});
      width: 1.25rem;
      height: 1.25rem
      position: relative;
      top: 4px;
      margin-right: 6px;
    }
  }

  .address {
    line-height: 1.5em;
    margin: 0;
    margin-top: 0.25rem;
  }

  h2 span {
    font-family: inherit;
    color: inherit;
    font-weight: 200;
  }

  .comments {
    border-top: 1px solid var(--color-line);
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

`;
