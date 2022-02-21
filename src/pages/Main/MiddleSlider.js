import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MAIN_IMAGE_DATA } from './MAIN_IMAGE_DATA';

const Sliders = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draragble: true,
    variableWidth: false,
    dots: true,
  };

  return (
    <div className="container">
      <StyledSlider {...settings}>
        {MAIN_IMAGE_DATA.map(data => {
          return (
            <div className="sliderWrap" key={data.id}>
              <SliderDisplay color={data.bg}>
                <SliderString>
                  <p className="desc">{data.desc}</p>
                  <p className="subDesc">{data.subDesc}</p>
                </SliderString>
                <SliderImg src={data.img} alt="sskd" />
              </SliderDisplay>
            </div>
          );
        })}
      </StyledSlider>
    </div>
  );
};

const StyledSlider = styled(Slider)`
  width: 100%;
  height: auto;

  .slick-list {
  }

  .slick-track {
    display: flex;
  }
`;

const SliderDisplay = styled.div`
  position: relative;
  ${({ theme }) => theme.flexCenter('row')};
  width: 100%;
  height: auto;

  background-color: ${props => props.color};
`;

const SliderImg = styled.img`
  width: 40%;
  height: 250px;
  object-fit: cover;
`;

const SliderString = styled.div`
  ${({ theme }) => theme.flexCenter('column')};
  width: 60%;
  color: black;

  .desc {
    color: white;
    font-size: 34px;
  }

  .subDesc {
    color: gray;
    margin-top: 40px;
    font-size: 20px;
  }
`;

export default Sliders;
