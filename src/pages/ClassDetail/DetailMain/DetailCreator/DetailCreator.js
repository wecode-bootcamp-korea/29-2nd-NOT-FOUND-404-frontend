import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CREATOR_CONTACT } from './detailCreatorData';
import theme, { Heading, ScrollMarginTop } from '../../../../styles/theme';

const DetailCreator = forwardRef((props, ref) => {
  return (
    <StyledDetailCreator ref={creatorRef => (ref.current[3] = creatorRef)}>
      <CreatorProfileWrapper>
        <CreatorHeading>
          크리에이터
          <br />
          <span>무한리더</span>입니다.
        </CreatorHeading>
        <ProfileImg>
          <img
            alt="creator"
            src="https://chungkyukim.github.io/page1.html/me1.jpg"
          />
        </ProfileImg>
      </CreatorProfileWrapper>
      <Contact>
        {CREATOR_CONTACT.map(({ id, name, userName, link, image }) => (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            <img alt={name} src={image} />
            <span>{userName}</span>
          </a>
        ))}
      </Contact>
      <Introduction>
        <p>
          첫 조카가 태어나 이제 막 기어다니고 있어요. 조카 새별이가 걸음마를
          시작할 때에, 저도 개발자로서 첫걸음을 디뎌보려 합니다. 그 전까지는
          같이 기어 다닐거에요. 전 회사에서 개발자와 함께 일했을 때 항상
          부정적이었던 그들.. 마냥 기다리기만 했던 짜증이, 어느새 개발자에 대한
          동경으로 바뀌어 지금은 개발에 대한 꿈이 되었습니다.
        </p>
      </Introduction>
    </StyledDetailCreator>
  );
});

const StyledDetailCreator = styled.section`
  ${ScrollMarginTop}
  padding-bottom: 48px;
  border-bottom: 1px solid ${theme.lightgray};
`;

const CreatorHeading = styled(Heading)`
  font-weight: normal;

  span {
    margin-right: 4px;
    font-weight: bold;
  }
`;

const CreatorProfileWrapper = styled.div`
  display: flex;
  place-content: center space-between;
`;

const ProfileImg = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 2px;
  border: 1px solid ${theme.lightgray};
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contact = styled.div`
  margin-top: 12px;

  a {
    display: inline-flex;
    align-items: center;
    margin-right: 16px;

    img {
      width: 18px;
      height: 18px;
    }

    span {
      margin-left: 2px;
      color: ${theme.gray};
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

const Introduction = styled.div`
  margin-top: 24px;

  p {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
    word-break: keep-all;
  }
`;

export default DetailCreator;
