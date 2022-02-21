import styled, { css } from 'styled-components';

const theme = {
  orange: '#ff5600',
  black: '#1a1a1a',
  realblack: '#000',
  white: '#fff',
  lightgray: '#f8f8f8',
  palegray: '#e5e5e5',
  softgray: '#d7d7d7',
  silvergray: '#cacaca',
  gray: '#a2a2a2',
  darkgray: '#666666',
  pinkred: '#f3213b',
  yellow: '#ffb800',
  blue: '#004ec3',

  flexCustom: (alignItems, justifyContent, flexDirection) => `
    display: flex;
    flex-direction: ${flexDirection || 'initial'};
    align-items: ${alignItems || 'center'};
    justify-content: ${justifyContent || 'center'};
  `,
};

export default theme;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
`;

export const SubTitle = css`
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
`;

export const NormalText = css`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
`;

export const ScrollMarginTop = css`
  padding-top: 48px;
  scroll-margin-top: 48px;
`;

export const ShowMoreBtn = styled.button`
  height: 44px;
  padding: 12px;
  border-radius: 3px;
  background-color: ${theme.lightgray};
  color: ${theme.darkgray};
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 0;

  &:hover {
    background-color: #efefef;
  }
`;
