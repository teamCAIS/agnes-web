import styled from 'styled-components';

export const Tags = styled.ul`
  display: flex;
  flex-wrap: no-wrap;
`;

export const Tag = styled.li`
  margin-right: 0.5rem;
  border-radius: 16px;
  background: var(--color-line);
  width: fit-content;
  background: ${({bg}) => bg ? bg : 'var(--color-secondary)'};
  color: var(--color-text-accent);
  font-size: 0.75rem;
  padding: 8px;
  padding-top: 4px;
  padding-bottom: 5px;
`;

export const SmallTag = styled(Tag)`
  
`;

export const getTagBG = (tag, tags) => {

  const tagFound = tags.find(item => item._id === tag.tag)
  if(!tagFound) return null;
  return tagFound.color

}

export const getTagName = (tag, tags) => {

  const tagFound = tags.find(item => item._id === tag.tag)
  if(!tagFound) return null;
  return tagFound.name

}