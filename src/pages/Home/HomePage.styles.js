import styled from 'styled-components';

export const StyledHome = styled.main`
  
  max-width: 700px;
  margin: auto;

  header {
    position: fixed;
    background-color: var(--color-base);
    width: 100%;
    padding: var(--app-margin);
  }

  h1 {
    margin-bottom: 1rem;
  }

  .content {
    padding: var(--app-margin);
    padding-top: calc(4*var(--app-margin));
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
