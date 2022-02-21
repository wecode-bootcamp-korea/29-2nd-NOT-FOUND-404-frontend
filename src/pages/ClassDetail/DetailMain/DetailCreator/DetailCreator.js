import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { CREATOR_CONTACT } from './detailCreatorData';
import theme, { Heading, ScrollMarginTop } from '../../../../styles/theme';

const DetailCreator = forwardRef(
  ({ creator_name, creator_image, creator_description }, ref) => {
    return (
      <StyledDetailCreator ref={creatorRef => (ref.current[3] = creatorRef)}>
        <CreatorProfileWrapper>
          <CreatorHeading>
            크리에이터
            <br />
            <span>{creator_name}</span>입니다.
          </CreatorHeading>
          <ProfileImg>
            <img alt="creator" src={creator_image} />
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
          <p>{creator_description}</p>
        </Introduction>
      </StyledDetailCreator>
    );
  }
);

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
