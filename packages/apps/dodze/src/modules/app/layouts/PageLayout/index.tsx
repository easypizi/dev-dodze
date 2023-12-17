import styled from 'styled-components';

export const PageLayout = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${(p) => p.theme.zIndex.header + 10};
  background-color: ${(p) => p.theme.palette.background.main};
`;
