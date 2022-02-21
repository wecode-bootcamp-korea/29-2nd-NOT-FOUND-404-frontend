import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MAIN_IMAGE_DATA } from './MAIN_IMAGE_DATA';

const Sliders = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <SliderWrap>
      <StyledSlider asNavFor={nav2} ref={slider1 => setNav1(slider1)}>
        {MAIN_IMAGE_DATA.map(data => {
          return (
            <div className="SliderForm" key={data.id}>
              <SliderBackground color={data.bg}>
                <SliderImg src={data.img} alt="sskd" />
                <SliderString>
                  <p className="desc">{data.desc}</p>
                  <p className="subDesc">{data.subDesc}</p>
                </SliderString>
              </SliderBackground>
            </div>
          );
        })}
      </StyledSlider>

      <StyledSlider2
        asNavFor={nav1}
        autoplay={true}
        autoplaySpeed={10000}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        fade={true}
      >
        {MAIN_IMAGE_DATA.map(data => {
          return <SliderMainImg key={data.id} src={data.img} alt="dd" />;
        })}
      </StyledSlider2>
    </SliderWrap>
  );
};

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 400px;

  .slick-arrow {
  }

  .slick-prev {
    top: 85%;
    left: 80%;
    z-index: 1;
  }

  .slick-prev:before {
    content: '\f053';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: x-large;
  }

  .slick-next:before {
    content: '\f054';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    font-size: x-large;
  }

  .slick-next {
    top: 85%;
    right: 15%;
    z-index: 1;
  }
`;

const SliderBackground = styled.div`
  display: flex;
  height: 400px;
  background-color: ${props => props.color};
`;

const StyledSlider2 = styled(Slider)`
  position: absolute;
  width: 40%;
  height: 400px;
  top: 10%;
  left: 10%;
`;

const SliderWrap = styled.div`
  margin-bottom: 40px;
`;

const SliderImg = styled.img`
  width: 50%;
  height: 400px;
  padding: 30px;
  filter: blur(60px);
`;

const SliderString = styled.div`
  width: 50%;
  padding: 80px;
  color: white;

  .desc {
    min-width: 360px;
    line-height: 44px;
    padding-right: 250px;
    font-size: 28px;
    font-weight: 700;
    white-space: pre-line;
  }

  .subDesc {
    margin-top: 40px;
    color: #bad1ce;
    font-size: 23px;
  }
`;

const SliderMainImg = styled.img`
  width: auto;
  max-height: 415px;
  object-fit: cover;
`;

export default Sliders;
