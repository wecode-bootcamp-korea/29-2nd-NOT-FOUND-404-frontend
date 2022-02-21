import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const ClassThumbnails = ({ thumbnail, coverImg }) => {
  return (
    <StyledClassThumbnails>
      <Coupon>3만원 쿠폰</Coupon>
      <Container height="519px">
        {coverImg && (
          <>
            <Box width="58.8%">
              <img alt="thumbnail" src={thumbnail} />
            </Box>
            <Container flexDirection="column" margin="0 0 0 6px">
              <Box height="50%">
                <img alt="thumbnail" src={coverImg[0]} />
              </Box>
              <Container margin="6px 0 0 0">
                <Box width="50%">
                  <img alt="thumbnail" src={coverImg[1]} />
                </Box>
                <Box width="50%" margin="0 0 0 6px">
                  <img alt="thumbnail" src={coverImg[2]} />
                </Box>
              </Container>
            </Container>
          </>
        )}
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
