import { Stack, Typography } from '@dev-dodze/ui';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled(Stack)`
  max-width: 100%;
  height: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacing.get(6, 10)};

    ${theme.breakpoints.down('md')} {
      width: 100%;
    }
  `}
`;

export const ContentBlock = styled(Stack)`
  ${({ theme }) => css``}
`;

export const Title = styled(Typography)`
  ${({ theme }) => css`
    text-transform: uppercase;
  `}
`;

export const Description = styled(Typography)`
  ${({ theme }) => css`
    line-height: ${theme.spacing.get(10)};
  `}
`;

export const ActionLinks = styled(Stack)`
  ${({ theme }) => css`
    width: 100%;

    ${theme.breakpoints.down('md')} {
      justify-content: space-between;
    }
  `}
`;

export const SocialLinkWithIcon = styled(Link)<{
  hoverColor?: string;
}>`
  ${({ theme, hoverColor }) => css`
    font-size: ${theme.spacing.get(6)};
    text-decoration: none;

    & svg {
      transition: color 0.1s ease-in;
      color: ${theme.palette.neutral5};
    }

    &:hover {
      & svg {
        color: ${hoverColor};
      }
    }
  `}
`;

export const GifHolder = styled.div`
  width: 100%;
  margin-top: auto;
`;
