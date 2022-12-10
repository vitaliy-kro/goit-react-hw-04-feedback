import styled from 'styled-components';
import { Box } from 'components/Box';

export const Container = styled(Box)`
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.fontSizes.l};

  color: ${({ theme }) => theme.colors.black};

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;
