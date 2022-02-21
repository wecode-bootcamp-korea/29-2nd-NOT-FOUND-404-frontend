import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import theme, { NormalText } from '../../../../../styles/theme';

const DetailClassObjectives = ({ objects }) => {
  return (
    <StyledDetailClassObjectives>
      <StyledSlider {...sliderSettings}>
        {objects?.map(({ id, title, content, image }) => (
          <StyledSlide key={id}>
            <h5>{title}</h5>
            <p>{content}</p>
            <ImgWrapper>
              <img alt={title} src={image} />
            </ImgWrapper>
          </StyledSlide>
        ))}
      </StyledSlider>
    </StyledDetailClassObjectives>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="fa-solid fa-chevron-left" />
    </button>
  );
};

const NextArrow = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className="fa-solid fa-chevron-right" />
    </button>
  );
};

const arrowBtnStyle = css`
  position: absolute;
  top: -48px;
  width: 32px;
  height: 32px;
  border-radius: 3px;
  color: ${theme.black};
  text-align: center;
  z-index: 2;
  transition: background-color 0.1s ease 0s;

  :hover {
    background-color: ${theme.lightgray};
  }

  &.slick-disabled {
    background-color: transparent;
    color: transparent;
    cursor: unset;
  }
`;

const StyledPrevArrow = styled(PrevArrow)`
  ${arrowBtnStyle}
  right: 32px;
`;

const StyledNextArrow = styled(NextArrow)`
  ${arrowBtnStyle}
  right: 0;
`;

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  prevArrow: <StyledPrevArrow />,
  nextArrow: <StyledNextArrow />,
};

const StyledDetailClassObjectives = styled.div`
  position: relative;
  padding-bottom: 48px;
`;

const StyledSlide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100vw - 48px);
  padding-right: 24px;

  h5 {
    margin-top: 4px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    ${NormalText}
    height: 40px;
    margin-top: 4px;
    color: ${theme.gray};
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-top: 16px;
  border-radius: 3px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  overflow: hidden;

  .slick-track {
    display: flex;
  }
`;

export default DetailClassObjectives;
