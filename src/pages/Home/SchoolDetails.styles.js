import styled from 'styled-components';
import star from '../../assets/star2.png';
import { iconBeforeStyles } from '../../styles/mixins';

export const StyledSchoolDetails = styled.main`
  max-width: 700px;
  margin: auto;

  h1, h2, h3 {
    font-size: 1.125rem;
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
    background: var(--color-base-transparent);
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
    padding: var(--app-margin) 0;
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
    margin-top: 1em;
  }

  .comments {
    border-top: 1px solid var(--color-line);
  }

`;
