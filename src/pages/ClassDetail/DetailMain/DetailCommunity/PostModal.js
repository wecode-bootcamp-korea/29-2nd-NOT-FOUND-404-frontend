import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import theme, {
  Heading,
  NormalText,
  StyledButton,
} from '../../../../styles/theme';

const PostModal = ({ isModalOpen, setIsModalOpen }) => {
  const [postValue, setPostValue] = useState('');

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : null;
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setPostValue('');
  };

  const handlePost = event => {
    setPostValue(event.target.value);
  };

  const submitPost = event => {
    event.preventDefault();
    // TODO: 서버 통신 예정
    alert(postValue);
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen} style={modalStyles}>
      <Form onSubmit={submitPost}>
        <FlexWrapper>
          <Heading>글 작성하기</Heading>
          <CloseBtn type="button" onClick={closeModal}>
            <i className="fa-solid fa-xmark" />
          </CloseBtn>
        </FlexWrapper>
        <FlexWrapper>
          <Writer>
            <i className="fa-solid fa-circle-user" />
            <span>무한리더</span>
          </Writer>
          <FileLabel>
            <input type="file" accept="image/*" />
            <AddFileBtn type="button">
              <i className="fa-solid fa-image" />
              <span>사진 첨부</span>
            </AddFileBtn>
          </FileLabel>
        </FlexWrapper>
        <TextArea
          name="content"
          placeholder="무단 홍보, 비방 글은 삭제될 수 있습니다."
          autocomplete="off"
          onInput={handlePost}
        />
        <SubmitBtnWrapper>
          <SubmitBtn>
            <div>저장하기</div>
          </SubmitBtn>
        </SubmitBtnWrapper>
      </Form>
    </Modal>
  );
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    maxWidth: '640px',
    minHeight: 'calc(100vh - 60px)',
    padding: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
  },
  overlay: {
    backgroundColor: 'rgba(248, 248, 248, 0.9)',
    zIndex: '80',
  },
};

const CloseBtn = styled.button`
  i {
    font-size: 24px;
  }
`;

const Form = styled.form`
  padding: 24px;
`;

const FlexWrapper = styled.div`
  ${theme.flexCustom('center', 'space-between')}
  margin-bottom: 16px;
`;

const Writer = styled.div`
  ${NormalText}
  flex-grow: 1;

  i {
    vertical-align: middle;
    color: ${theme.silvergray};
    font-size: 24px;
  }

  span {
    margin-left: 8px;
  }
`;

const FileLabel = styled.label`
  cursor: pointer;

  input[type='file'] {
    display: none;
  }
`;

const AddFileBtn = styled(StyledButton)`
  background-color: ${theme.lightgray};
  font-weight: normal;
  line-height: 1;
  pointer-events: none;

  i {
    margin-right: 4px;
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  ${NormalText}
  width: 100%;
  min-height: 280px;
  max-height: calc(100vh - 240px);
  padding: 16px;
  border: 1px solid ${theme.palegray};
  outline: none;
  background-color: transparent;
  font-family: inherit;
  resize: none;

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const SubmitBtnWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 12px;
  border-top: 1px solid ${theme.lightgray};
  background-color: ${theme.white};
  transform: translateX(-50%);
`;

const SubmitBtn = styled(StyledButton)`
  flex: 1 1 0;
  max-width: 640px;
  height: 48px;
  background-color: ${theme.orange};
  color: ${theme.white};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  z-index: 500;

  &:hover {
    background-color: ${theme.darkorange};
  }
`;

export default PostModal;
