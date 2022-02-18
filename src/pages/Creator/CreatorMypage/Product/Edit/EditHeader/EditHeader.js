import React, { useState } from 'react';
import styled from 'styled-components';
import Logo404 from '../../../../img/404-logo.svg';
import Modal from './Modal';

function EditHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setModalOpen(false);
  };

  return (
    <Header>
      <Wrap>
        <Logo src={Logo404} />
        <Text>상품 작성하기</Text>
        <Persent>0% 완료</Persent>
      </Wrap>
      <div>
        <Button onClick={openModal}>나가기</Button>
        <Modal open={modalOpen} close={closeModal} />
      </div>
    </Header>
  );
}

export default EditHeader;

const Header = styled.header`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  height: 72px;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
`;

const Wrap = styled.section`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-right: 14px;
  letter-spacing: -1px;
`;

const Persent = styled.p`
  font-size: 14px;
  color: ${props => props.theme.orange};
  letter-spacing: -0.5px;
`;

const Button = styled.button`
  width: 68px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 4px;
  letter-spacing: -0.5px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const Logo = styled.img`
  margin-right: 10px;
  width: 40px;
`;
