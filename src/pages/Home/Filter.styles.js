import styled from 'styled-components';

export const StyledFilter = styled.main`
  max-width: 700px;
  margin: auto;
  overflow-x: hidden;

  h1, h2, h3 {
    font-size: 1.125rem;
  }

  .app-bar {
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: center;
    padding: 18px var(--app-margin);

    .back-btn {
      margin-right: 1rem;
    }

  }

  section, footer {
    margin: 1rem 0;
    padding: 0 var(--app-margin);
  }

  .info-text {
    margin: 2rem var(--app-margin) 2rem var(--app-margin);
  }

  .selected-distance {
    text-align: center;
  }

  .form-section {
    font-weight: 600;
  }

  .star-group {
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    & > * {
      margin: 0 0.5rem;
    }
  }

  .tag-section {
    padding-right: 0;
  }

  .tag-group {
    overflow: auto;
    white-space: nowrap;
    margin: 1rem 0rem 2rem 0;
  }

`;
