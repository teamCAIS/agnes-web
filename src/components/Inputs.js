import styled from "styled-components";

export const Label = styled.label`
  font-weight: 600;
  margin: 1rem 0;
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  padding: 15px 16px 14px 16px;
  margin: 0.25rem 0 1rem 0;
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-gray);

  &:focus {
    border-color: var(--color-text-accent);
  }
`;