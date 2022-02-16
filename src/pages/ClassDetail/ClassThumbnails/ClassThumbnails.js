import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const ClassThumbnails = () => {
  return (
    <StyledClassThumbnails>
      <Coupon>3만원 쿠폰</Coupon>
      <Container height="519px">
        <Box width="58.8%">
          <img
            alt="thumbnail"
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          />
        </Box>
        <Container flexDirection="column" margin="0 0 0 6px">
          <Box height="50%">
            <img
              alt="thumbnail"
              src="https://images.unsplash.com/photo-1627399270231-7d36245355a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </Box>
          <Container margin="6px 0 0 0">
            <Box width="50%">
              <img
                alt="thumbnail"
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
            </Box>
            <Box width="50%" margin="0 0 0 6px">
              <img
                alt="thumbnail"
                src="https://images.unsplash.com/photo-1585229259898-f6caa3fdea13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
            </Box>
          </Container>
        </Container>
      </Container>
    </StyledClassThumbnails>
  );
};

const StyledClassThumbnails = styled.div`
  position: relative;
  max-width: 1920px;
`;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  ${({ flexDirection, width, height, margin }) => css`
    flex-direction: ${flexDirection};
    width: ${width || '100%'};
    height: ${height || '100%'};
    margin: ${margin || '0'};
  `}
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Box = styled.div`
  position: relative;
  flex: 0 0 auto;
  ${({ width, height, margin }) => css`
    width: ${width || '100%'};
    height: ${height || '100%'};
    margin: ${margin || '0'};
  `}
  overflow: hidden;
`;

const Coupon = styled.div`
  position: absolute;
  top: 24px;
  left: 32px;
  padding: 8px 12px 10px;
  border-radius: 2px;
  background-color: ${theme.pinkred};
  color: ${theme.white};
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
  z-index: 1;
  pointer-events: none;
`;

export default ClassThumbnails;
