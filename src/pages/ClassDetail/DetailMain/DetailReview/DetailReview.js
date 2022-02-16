import React, { forwardRef } from 'react';
import { Rating } from 'react-simple-star-rating';
import styled, { css } from 'styled-components';
import { REVIEW_IMG, REVIEW_DATA } from './detailReviewData';
import theme, {
  ScrollMarginTop,
  Heading,
  ShowMoreBtn,
} from '../../../../styles/theme';

const DetailReview = forwardRef((props, ref) => {
  return (
    <StyledDetailReview ref={reviewRef => (ref.current[0] = reviewRef)}>
      <ReviewImgSection>
        <Heading>
          실제 수강생들의
          <br />
          생생한 스토리
        </Heading>
        <Status>
          <dl>
            <dt>클래스 한줄평</dt>
            <dd>793</dd>
          </dl>
          <dl>
            <dt>수강생 만족도</dt>
            <dd>
              99<span>%</span>
            </dd>
          </dl>
        </Status>
        <ImgContainer>
          {REVIEW_IMG.map(img => (
            <span key={img.id}>
              <img alt={img.id} src={img.src} />
            </span>
          ))}
        </ImgContainer>
      </ReviewImgSection>
      <ReviewTextSection>
        <header>
          <h4>실제 수강생 후기</h4>
          <button>후기 작성하기</button>
        </header>
        <StarWrapper>
          <Rating ratingValue={4.6 * 20} readonly={true} />
          <Average>{4.6}</Average>
          <Sum>{`총 ${58}개`}</Sum>
        </StarWrapper>

        <ReviewsWrapper>
          {REVIEW_DATA.map(({ id, user_nickname, content, ratings, likes }) => (
            <Review key={id}>
              <UserWrapper>
                <UserName>{user_nickname}</UserName>
                <UserRating>
                  <Rating
                    ratingValue={ratings * 20}
                    readonly={true}
                    size={12}
                  />
                </UserRating>
              </UserWrapper>
              <ReviewContent>{content}</ReviewContent>
              <ReviewLikes>
                <ThumbsUp>
                  <i className="fa-regular fa-thumbs-up" />
                </ThumbsUp>
                {likes}명에게 도움이 됐어요
              </ReviewLikes>
            </Review>
          ))}
        </ReviewsWrapper>
        <ShowMoreBtn>{`${58}개의 후기 더 보기`}</ShowMoreBtn>
      </ReviewTextSection>
    </StyledDetailReview>
  );
});

const StyledDetailReview = styled.section`
  ${ScrollMarginTop}
  padding: 48px 12px;
  border-bottom: 1px solid ${theme.lightgray};
  font-size: 14px;
  line-height: 24px;
`;

const ReviewImgSection = styled.section`
  padding-bottom: 48px;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0 16px;
  text-align: center;

  dl {
    width: 50%;

    dt {
      color: ${theme.gray};
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
    }

    dd {
      font-size: 32px;
      font-weight: 800;
      line-height: 44px;
      letter-spacing: -0.6px;
    }
  }
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 16px 0px;
  overflow: hidden;

  span {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;

    img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      object-fit: cover;
    }
  }
`;

const ReviewTextSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 48px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    h4 {
      flex: 1 1 0;
      font-size: 20px;
      font-weight: bold;
      line-height: 26px;
      letter-spacing: -0.2px;
    }

    button {
      display: inline-flex;
      place-content: center center;
      height: 30px;
      padding: 8px 12px;
      border: 1px solid ${theme.softgray};
      border-radius: 2px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
    }
  }
`;

const StarWrapper = styled.div`
  display: flex;
  place-content: center center;
  margin-bottom: 40px;

  i {
    padding: 4px;
    color: ${theme.yellow};
    font-size: 28px;
  }

  span {
    ${({ color, fontSize, lineHeight }) => css`
      color: ${color};
      font-size: ${fontSize + 'px'};
      line-height: ${lineHeight + 'px' || '32px'};
      letter-spacing: ${fontSize * -0.01 + 'px'};
    `}
  }
`;

const Average = styled.span`
  margin: 0 8px 0 6px;
  color: inherit;
  font-size: 26px;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: -0.26px;
`;

const Sum = styled.span`
  margin-top: 12px;
  color: ${theme.gray};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.14px;
`;

const ReviewsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0px -16px;
`;

const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0px 16px 40px;
`;

const UserWrapper = styled.div`
  display: flex;
  place-content: center space-between;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const UserRating = styled.div`
  display: flex;
`;

const ReviewContent = styled.div`
  display: -webkit-box;
  margin: 12px 0;
  font-size: 14px;
  line-height: 18px;
  word-break: break-word;
  white-space: pre-wrap;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ReviewLikes = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.gray};
  font-size: 12px;
  line-height: 16px;
`;

const ThumbsUp = styled.div`
  margin-right: 4px;
  font-size: 16px;
`;

export default DetailReview;
