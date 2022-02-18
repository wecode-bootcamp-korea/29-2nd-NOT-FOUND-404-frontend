import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Close from '../../../../img/close.svg';
import theme from '../../../../../../styles/theme';

function Modal({ open, close }) {
  return (
    <div>
      {open ? (
        <ModalBg>
          <ModalBox>
            <CloseBtn onClick={close}>
              <img src={Close} />
            </CloseBtn>
            <Title>
              크리에이터님
              <br />
              정말 나가실 거예요?
            </Title>
            <Text>
              오늘, 마음먹은 김에 바로 페이지 작성을 완료하고 크리에이터님을
              기다리고 있는 수강생들을 만나세요! 조금만 더 힘내봐요 우리 🙆‍♀️
            </Text>
            <BtnWarp>
              <OutBtn>
                <Link to="/creator/mypage" onClick={close}>
                  나갈래요
                </Link>
              </OutBtn>
              <KeepBtn onClick={close}>계속 작성할래요</KeepBtn>
            </BtnWarp>
          </ModalBox>
        </ModalBg>
      ) : null}
    </div>
  );
}

export default Modal;

const ModalBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
  animation: modal-bg-show 0.3s;

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBox = styled.section`
  position: relative;
  padding: 32px;
  width: 480px;
  height: 252px;
  letter-spacing: -1px;
  background-color: #fff;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Text = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
`;

const BtnWarp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 32px;
  width: 16px;
`;

const OutBtn = styled.button`
  margin-top: 16px;
  width: 180px;
  height: 40px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: -0.5px;
  font-size: 14px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const KeepBtn = styled.button`
  margin-top: 16px;
  width: 220px;
  height: 40px;
  text-align: center;
  background-color: ${theme.orange};
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: -0.5px;
  font-size: 14px;
  color: #fff;

  &:hover {
    background-color: #bf3604;
  }
`;
