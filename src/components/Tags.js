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
  background: ${({bg}) => bg ? bg : 'var(--color-line)'};
`;

export const SmallTag = styled(Tag)`
  font-size: 0.75rem;
  padding: 8px;
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