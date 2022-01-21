import styled from 'styled-components';
import star from '../../assets/star.png'

export const StyledSchoolDetails = styled.main`
  max-width: 700px;
  margin: auto;

  h1, h2, h3 {
    font-size: 1.125rem;
  }

  header {
    min-height: 250px;
    background-color: var(--color-line);
    padding: var(--app-margin);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header > * {
    display: flex;
  }

  header > .app-bar {
    flex-direction: row-reverse;
    justify-content: left;

    .back-btn {
      margin-right: 1rem;
    }

  }

  header > .info {
    justify-content: space-between;
  }

  .grade {
    font-size: 1.5rem;
    &::before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url(${star});
      position: relative;
      top: 2px;
      margin-right: 6px;
    }
  }

`;
