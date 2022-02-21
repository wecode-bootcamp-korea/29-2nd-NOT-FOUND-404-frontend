import React from 'react';
import styled from 'styled-components';
import Sliders from './Sliders';
import MiddleSlider from './MiddleSlider';
import ProductsWrap from './ProductsWrap';

const Main = () => {
  return (
    <div className="Main">
      <MainWrapper>
        <Sliders />

        <SectionWrapper>
          <MainSection>
            <SectionContainer>
              <ProductsWrap />
            </SectionContainer>
          </MainSection>

          <BannerSection>
            <MiddleSlider />
          </BannerSection>

          <MainSection>
            <SectionContainer>
              <ProductsWrap />
            </SectionContainer>
          </MainSection>
        </SectionWrapper>
      </MainWrapper>
    </div>
  );
};
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const SectionWrapper = styled.div`
  ${({ theme }) => theme.flexCenter('column')};
  align-items: center;
  margin-top: 60px;
`;

const MainSection = styled.div`
  width: 80%;
  height: auto;
  margin: 40px 0 40px 0;
`;

const SectionContainer = styled.div`
  padding: 20px;
`;

const BannerSection = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 40px;
`;

export default Main;
