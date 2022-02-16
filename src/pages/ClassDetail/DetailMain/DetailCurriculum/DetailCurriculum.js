import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { DETAIL_CURRICULUM } from './detailCurriculumData';
import theme, { Heading, ScrollMarginTop } from '../../../../styles/theme';

const DetailCurriculum = forwardRef((props, ref) => {
  return (
    <StyledDetailCurriculum
      ref={curriculumRef => (ref.current[2] = curriculumRef)}
    >
      <Heading>커리큘럼</Heading>
      <CurriculumIntro>
        <p>클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다.</p>
        <p>
          콘텐츠는 배우기 쉽게 영상, 수업노트, 첨부파일로 구성되어 있습니다.
        </p>
      </CurriculumIntro>
      <CurriculumList>
        {DETAIL_CURRICULUM.map(({ id, curriculum }, index) => (
          <CurriculumItem key={id}>
            <span>{index + 1}</span>
            {curriculum}
          </CurriculumItem>
        ))}
      </CurriculumList>
    </StyledDetailCurriculum>
  );
});

const StyledDetailCurriculum = styled.section`
  ${ScrollMarginTop}
  padding-bottom: 48px;
  border-bottom: 1px solid ${theme.lightgray};
`;

const CurriculumIntro = styled.div`
  margin: 12px 0px 16px;
  font-size: 14px;
  line-height: 24px;
`;

const CurriculumList = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${theme.lightgray};
`;

const CurriculumItem = styled.li`
  display: flex;
  align-items: center;
  margin: 12px 0;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;

  span {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 100%;
    background-color: ${theme.orange};
    color: ${theme.white};
    text-align: center;
    font-size: 20px;
    line-height: 1.5;
  }
`;

export default DetailCurriculum;
