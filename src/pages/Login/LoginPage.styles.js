import styled from "styled-components";

export const StyledLogin = styled.main`
  
  max-width: 700px;
  margin: auto;

  header {
    width: 100%;
    padding: 18px var(--app-margin);
    z-index: 99;
    /*box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);*/
    display: flex;
    justify-content: space-between;
    background: var(--color-bg-primary);
  }

  h1 {
    span {
      color: inherit;
      font-weight: 200;
    }
  }

  .content {
    padding: var(--app-margin);
    padding-bottom: .5rem;
  }

  label {
    margin-left: 1rem;
  }

`;