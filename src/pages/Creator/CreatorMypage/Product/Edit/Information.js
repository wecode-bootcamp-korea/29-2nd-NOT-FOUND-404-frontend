import React from 'react';
import styled from 'styled-components';

function Information() {
  return (
    <InformationWarp>
      <Warp>
        <Title>어떤 클래스인지 알려주세요</Title>
        <Account>
          언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요?
          <br />
          간단히 크리에이터님이 알려 줄 수 있는 카테고리를 설정해봐요.
          <br />
          모든 수정 사항은 즉시 저장되니 안심해 주세요.
        </Account>
        <Text>브랜드</Text>
        <Select>
          <option value="1">크리에이티브</option>
          <option value="2">수익 창출</option>
          <option value="3">개발 · 커리어</option>
        </Select>
        <Text>카테고리</Text>
        <Select>
          <option value="" hidden style={{ color: 'red' }}>
            카테고리를 선택해주세요.
          </option>
          <option value="3">HTML/CSS</option>
          <option value="3">자바스크립트</option>
          <option value="3">리액트</option>
          <option value="3">파이썬</option>
          <option value="3">C++</option>
          <option value="3">깃(Git)</option>
        </Select>
        <Text onChange={e => e.target.value}>가격</Text>
        <Input type="number" placeholder="가격을 입력해주세요." />
        <Text>난이도</Text>
        <Select>
          <option value="" hidden>
            난이도를 선택해주세요.
          </option>
          <option>입문자</option>
          <option>초급자</option>
          <option>중급자</option>
          <option>준전문가</option>
          <option>전문가</option>
        </Select>
        <Text>클래스 분량</Text>
        <Select>
          <option value="" hidden>
            클래스 분량을 선택해주세요.
          </option>
          <option>50분</option>
          <option>60분</option>
          <option>70분</option>
          <option>80분</option>
          <option>90분</option>
          <option>100분</option>
        </Select>
        <Text>자막 포함 여부</Text>
        <Select>
          <option>포함</option>
          <option>불포함</option>
        </Select>
      </Warp>
    </InformationWarp>
  );
}

export default Information;

const InformationWarp = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warp = styled.section``;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: #a2a2a2;
`;

const Select = styled.select`
  margin-bottom: 32px;
  padding: 0px 48px 0px 16px;
  width: 936px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;
  -webkit-appearance: none;

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const Input = styled.input`
  margin-bottom: 32px;
  padding: 0px 48px 0px 16px;
  width: 936px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: #cacaca;
  }
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;
