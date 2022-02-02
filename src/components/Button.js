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

  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

export const ButtonPrimary = styled(Button)`
  display: block;
  width: 100%;
  border-radius: 1rem;
  padding: 0.75rem;
  background: var(--color-primary);
  color: var(--color-text-accent);
  font-weight: 600;
`;

export const ImageButton = styled(Button)`
  width: ${({size}) => size ? size : `1.5rem`};
  height: ${({size}) => size ? size : `1.5rem`};
  border-radius: 8px;
  padding: ${({background}) => background ? '6px' : 'unset'};
  background: ${({background}) => background ? 'var(--color-text-accent)' : 'transparent'};
  display: flex;
  align-items: stretch;
  &::before {
    flex:1;
    content: "";
    display: block;
    background-image: ${({icon}) => `url(${icon});`}
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  
`;

export const ButtonLabel = styled.span`
  font-size: 0;
  height: 1px;
  overflow: hidden;
  display: block;
`;

export const LinkButton = styled(Button)`
  color: var(--color-link);
  margin: 0.5rem auto;
  display: block;
  text-decoration: underline;
  font-family: 'Source Sans Pro', sans-serif;
`
