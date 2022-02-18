import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

function NoticeBox() {
  return (
    <div>
      <BtnWarp>
        <Button>
          <Plus>+</Plus>공지하기
        </Button>
      </BtnWarp>
      <Box>
        <Txt>클래스 수강생들에게 소식을 전해보세요!</Txt>
        <SmallTxt>
          클래스 업데이트, 추가 보조자료 제공, 바쁜 일정으로 피드백이 늦어질
          경우 등 중요한 소식을 한번에 관리할 수 있으세요
        </SmallTxt>
      </Box>
    </div>
  );
}

export default NoticeBox;

const BtnWarp = styled.section`
  display: flex;
  justify-content: end;
  margin-bottom: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0px 16px;
  height: 40px;
  border-radius: 3px;
  color: #0043a8;
  letter-spacing: -0.5px;

  &:hover {
    background: #dfdfdf;
  }
`;

const Plus = styled.p`
  margin-right: 4px;
  font-size: 26px;
  color: ${theme.silvergray};
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 545px;
  height: 76px;
  background-color: ${theme.lightgray};
  border-radius: 3px;
`;

const Txt = styled.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const SmallTxt = styled.p`
  margin-top: 8px;
  font-size: 11px;
  letter-spacing: -0.5px;
`;
