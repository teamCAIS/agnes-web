import styled from 'styled-components';

export const StyledHome = styled.main`
  
  max-width: 700px;
  margin: auto;

  header {
    position: fixed;
    background-color: var(--color-base);
    width: 100%;
    padding: 18px var(--app-margin);
    z-index: 99;
    /*box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);*/
  }

  .content {
    padding: var(--app-margin);
    padding-top: calc(3*var(--app-margin));
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
