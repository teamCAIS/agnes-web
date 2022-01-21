import styled from 'styled-components';

export const StyledFilter = styled.main`
  max-width: 700px;
  margin: auto;
  padding: var(--app-margin);

  h1, h2, h3 {
    font-size: 1.125rem;
  }

  .app-bar {
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;

    .back-btn {
      margin-right: 1rem;
    }

  }

`;
