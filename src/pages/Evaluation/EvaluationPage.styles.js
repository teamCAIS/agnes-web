import styled from 'styled-components';

export const StyledEvaluation = styled.main`
  max-width: 700px;
  margin: auto;
  overflow-x: hidden;

  h1, h3 {
    font-size: 1.125rem;
  }

  h2, .section-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0 1rem;
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
    margin: 0 var(--app-margin) 1rem var(--app-margin);
  }

  .form-section {
    font-weight: 600;
  }

`;