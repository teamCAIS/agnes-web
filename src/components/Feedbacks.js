import styled from "styled-components";
import { iconBeforeStyles } from "../styles/mixins";
import successIcon from "../assets/success.png";
import errorIcon from "../assets/error.png";

export const Snackbar = styled.div`

  position: fixed;
  z-index: 99;
  bottom: 0;
  width: calc(100% - 2*var(--app-margin));
  max-width: calc(700px - 2*var(--app-margin));
  margin: var(--app-margin);
  background-color: var(--color-text-accent);
  padding: 1rem 1.125rem;
  color: var(--color-base);
  font-size: 1rem;
  border-radius: 1rem;
  &::before {
    ${iconBeforeStyles}
    position: relative;
    top:2px;
    background-image: ${({success}) => success ? `url(${successIcon})` : `url(${errorIcon})`};
  }

`;
