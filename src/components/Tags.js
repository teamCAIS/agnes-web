import styled from 'styled-components';

export const Tags = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
`;

export const Tag = styled.li`
  margin-right: 0.5rem;
  border-radius: 16px;
  background: var(--color-line);
  padding: 4px 8px;
  width: fit-content;
`;

export const SmallTag = styled(Tag)`
  font-size: 0.75rem;
  padding: 8px;
`;