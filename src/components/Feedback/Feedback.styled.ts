import styled from 'styled-components';

export const FeedbackButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.monospace};
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding: ${({ theme }) => theme.space[2]}px;

  :not(:first-child) {
    margin-left: ${({ theme }) => theme.space[3]}px;
  }

  border-radius: ${({ theme }) => theme.radii.normal};

  background-color: transparent;
  cursor: pointer;

  :hover { background-color: ${({ theme }) => theme.colors.secondBackground};
  color: ${({ theme }) => theme.colors.white}
`;
