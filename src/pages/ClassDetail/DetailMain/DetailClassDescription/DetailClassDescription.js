import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import DetailClassObjectives from './DetailClassObjectives/DetailClassObjectives';
import { CLASS_DESCRIPTION_MD } from './classDescriptionData';
import theme, {
  ScrollMarginTop,
  Heading,
  SubTitle,
  NormalText,
} from '../../../../styles/theme';

const DetailClassDescription = forwardRef((props, ref) => {
  return (
    <StyledDetailClassDescription
      ref={descriptionRef => (ref.current[1] = descriptionRef)}
    >
      <Heading>이런 걸 배울 거예요</Heading>
      <DetailClassObjectives />
      <header>
        <Heading>
          <Target>초급자</Target>분들을 위한
          <br />
          <Target>코딩독학</Target>
          <br />
          클래스입니다.
        </Heading>
      </header>
      <ClassInfoWrapper>
        <Period>
          <div>
            <i className="fa-solid fa-calendar-days" />
          </div>
          <h6>1년 수강 가능</h6>
          <Text>수강 기간 내 무제한 수강 가능합니다.</Text>
        </Period>
        <Hours>
          <div>
            <i className="fa-solid fa-file-invoice" />
          </div>
          <h6>{`${56}시간 콘텐츠`}</h6>
          <Text>{`총 ${56}시간의 강의를 수강하실 수 있습니다.`}</Text>
        </Hours>
      </ClassInfoWrapper>
      <StyledReactMarkdown
        children={CLASS_DESCRIPTION_MD}
        remarkPlugins={[remarkGfm]}
      />
    </StyledDetailClassDescription>
  );
});

const StyledDetailClassDescription = styled.section`
  ${ScrollMarginTop}
  padding-bottom: 48px;
  border-bottom: 1px solid ${theme.lightgray};

  header {
    margin: 48px 0px 24px;
  }
`;

const Target = styled.span`
  color: ${theme.blue};
`;

const ClassInfoWrapper = styled.div`
  display: flex;
`;

const Hours = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0px;

  h6 {
    ${SubTitle}
    margin: 8px 0 4px;
  }

  i {
    font-size: 24px;
    padding: 4px;
  }
`;

const Period = styled(Hours)`
  padding-right: 24px;
`;

const Text = styled.div`
  ${NormalText}
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${SubTitle}
    margin: 36px 0 8px;
  }

  p {
    padding-top: 8px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    word-break: keep-all;
    overflow-wrap: break-word;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto 16px;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: oblique;
  }
`;

export default DetailClassDescription;
