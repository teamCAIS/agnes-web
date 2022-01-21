import styled from 'styled-components';

export const StyledHome = styled.main`
  padding: var(--app-margin);
  max-width: 700px;
  margin: auto;

  h1 {
    margin-bottom: 1rem;
  }

  section {
    border-top: 1px solid var(--color-line);
    padding-top: 1.125rem;
    margin-top: 1.5rem;
  }

  h2, h3 {
    font-size: 1.125rem;
  }

  .search-field {
    position: relative;

    button {
      position: absolute;
      right: 9px;
      bottom: 9px;
    }
  }

`;
