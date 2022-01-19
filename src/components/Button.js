import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  color: inherit;
  font: inherit;

  line-height: normal;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  -webkit-appearance: none;

  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:focus:not(:-moz-focusring) {
    outline: none;
  }

`;

export const ButtonPrimary = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 1rem;
  padding: 0.875rem;
  background: var(--color-primary);
  color: var(--color-base);
  font-weight: 600;
`;
