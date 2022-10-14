import styled from 'styled-components';

export const StatisticValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[2]}px;
  }

  color: ${({ theme }) => theme.colors.black};
`;
