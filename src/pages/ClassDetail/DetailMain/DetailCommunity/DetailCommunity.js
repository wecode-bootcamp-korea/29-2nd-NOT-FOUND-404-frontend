import React, { forwardRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PostModal from './PostModal';
import { POSTINGS, COMMENTS } from './communityData';
import theme, {
  Heading,
  ScrollMarginTop,
  StyledButton,
  ShowMoreBtn,
} from '../../../../styles/theme';

const DetailCommunity = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postings, setPostings] = useState({});
  const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    const getPostingsData = async () => {
      const json = await (
        await fetch('/data/detailData/communityPostingsData.json')
      ).json();
      setPostings(json);
    };
    getPostingsData();
  }, []);

  const handleCommentInput = event => {
    const id = event.target.dataset.postId;
    const value = event.target.value;
    setCommentInput(curr => ({ ...curr, [id]: value }));
  };

  const submitComment = event => {
    event.preventDefault();
    const id = event.target.dataset.postId;
    // TODO: 서버와 통신 예정
    // console.log(id, commentInput[id]);
    setCommentInput(curr => ({ ...curr, [id]: '' }));
  };

  return (
    <StyledDetailCommunity
      ref={communityRef => (ref.current[4] = communityRef)}
    >
      <Header>
        <Heading>
          커뮤니티<PostsAmount>{`${282}개의 글`}</PostsAmount>
        </Heading>
        <WritePostBtn
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          글 작성하기
        </WritePostBtn>
      </Header>
      <PostModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Announcement>
        <Creator>
          <CreatorProfileImg>
            <img
              alt="creator"
              src="https://chungkyukim.github.io/page1.html/me1.jpg"
            />
          </CreatorProfileImg>
          <span>무한리더</span>
        </Creator>
        <p>
          안녕하세요, 개발자 무한리더입니다! 다음 주 월요일 드디어 클래스가 처음
          런칭되는데요! 많은 분들께서 기대해주시고 응원해주신 만큼 정말 열심히
          클래스를 제작하고 있답니다. 클래스와 관련해 여러분께 몇 가지
          안내사항이 있어 공지를 드려요!
        </p>
      </Announcement>
      <PostsWrapper>
        {postings &&
          POSTINGS.map(({ id, name, content }) => (
            <Post key={id}>
              <UserName>
                <UserIcon className="fa-solid fa-circle-user" />
                {name}
              </UserName>
              <PostContent>{content}</PostContent>

              {COMMENTS.filter(ele => ele.post_id === id).map(
                ({ id, name, content }) => (
                  <UploadedComment key={id}>
                    <UserName fontSize="12px">
                      <UserIcon
                        fontSize="14px"
                        className="fa-solid fa-circle-user"
                      />
                      {name}
                    </UserName>
                    <CommentContent>{content}</CommentContent>
                  </UploadedComment>
                )
              )}

              <CommentForm data-post-id={id} onSubmit={submitComment}>
                <FileLabel>
                  <img
                    alt="파일 첨부"
                    src="/images/icons/ic-new-file-input-button.png"
                  />
                  <input name="file" type="file" accept="image/*" />
                </FileLabel>
                <CommentTextarea
                  name="content"
                  placeholder="댓글을 입력해주세요."
                  rows="1"
                  data-post-id={id}
                  value={commentInput[id]}
                  onInput={handleCommentInput}
                />
                <CommentSubmitBtn type="submit">
                  <i className="fa-regular fa-circle-right" />
                </CommentSubmitBtn>
              </CommentForm>
            </Post>
          ))}
        <ShowMoreBtn>더 보기</ShowMoreBtn>
      </PostsWrapper>
    </StyledDetailCommunity>
  );
});

const StyledDetailCommunity = styled.section`
  ${ScrollMarginTop}
  margin-bottom: 48px;
`;

const Header = styled.header`
  ${theme.flexCustom('center', 'space-between')}
  margin-bottom: 24px;
`;

const PostsAmount = styled.small`
  margin-left: 8px;
  color: ${theme.silvergray};
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
`;

const WritePostBtn = styled(StyledButton)`
  display: inline-flex;
  background-color: #3a3a3a;
  color: ${theme.lightgray};

  &:hover {
    background-color: #212121;
  }
`;

const TextContent = css`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.15px;
  word-break: keep-all;
  white-space: pre-wrap;
`;

const Announcement = styled.section`
  ${TextContent}
  padding: 16px;
  margin: 0 4px 48px;
  border-radius: 3px;
  box-shadow: rgb(41 42 43 / 10%) 0px 2px 5px, rgb(41 42 43 / 6%) 0px 0px 0.5px;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: 600;
  line-height: 0;
`;

const Creator = styled(UserName)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const UserIcon = styled.i`
  margin-right: 6px;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${theme.silvergray};
`;

const CreatorProfileImg = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid ${theme.lightgray};
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  padding: 24px 0;
  border-top: 1px solid ${theme.lightgray};
`;

const PostContent = styled.div`
  ${TextContent}
  margin: 16px 0;
`;

const UploadedComment = styled.div`
  padding-left: 32px;
  margin: 24px 0 16px;
`;

const CommentContent = styled.div`
  ${TextContent}
  margin: 4px 0;
  font-size: 14px;
`;

const CommentForm = styled.form`
  ${theme.flexCustom('center', 'space-between')}
  min-height: 48px;
  padding: 0px 10px;
  border: 1px solid ${theme.palegray};
  border-radius: 25px;
  background-color: ${theme.white};
`;

const FileLabel = styled.label`
  cursor: pointer;
  width: 28px;
  height: 28px;

  img {
    width: 100%;
    height: 100%;
  }

  input[type='file'] {
    display: none;
  }
`;

const CommentTextarea = styled.textarea`
  flex-grow: 1;
  padding: 14px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${theme.black};
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  overflow-x: hidden;
  overflow-wrap: break-word;
  resize: none;
`;

const CommentSubmitBtn = styled.button`
  color: ${theme.palegray};
  font-size: 22px;

  &:hover {
    color: ${theme.black};
  }
`;

export default DetailCommunity;
