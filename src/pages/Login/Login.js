import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';
import { api } from '../../config';

const Login = () => {
  const client_id = process.env.REACT_APP_KAKAO_API;
  const redirect_uri = api.redirect_uri;
  const kakao_auth_url = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

  const loginPageMoveHandler = () => {
    document.location.href = kakao_auth_url;
  };

  return (
    <Wrap>
      <ContentsSection>
        <LoginHeaderWrap>
          <LoginHeaderLogoWrap to="/main">
            <LoginHeaderLogo src="/images/Login/header-logo.png" />
          </LoginHeaderLogoWrap>
          <LoginHeaderLangauge>🇰🇷 한국어</LoginHeaderLangauge>
        </LoginHeaderWrap>
        <ContentsWrap>
          <WelcomeTitle>
            준비물까지 챙겨주는 <br />
            온라인 클래스
          </WelcomeTitle>
          {LOGIN_SELECT_BUTTON_SUMMARY.map(({ id, name }) => (
            <LoginBtn key={id} onClick={loginPageMoveHandler}>
              {id === 1 && <LoginBtnIcon src="/images/Login/icon-kakao.png" />}
              <span>{name}</span>
            </LoginBtn>
          ))}
        </ContentsWrap>
      </ContentsSection>
      <ImgSection />
    </Wrap>
  );
};

const Wrap = styled.main`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${theme.white};
`;

const ContentsSection = styled.section`
  ${theme.flexCustom('initial', 'initial', 'column')};
  flex: 0.88 1 0%;
  position: relative;
  background: ${theme.white};
`;

const ImgSection = styled.section`
  flex: 1 1 0%;
  background-image: url(/images/Login/login-bg.jpg);
  background-size: cover;
  background-position: center;
`;

const LoginHeaderWrap = styled.div`
  ${theme.flexCustom('center', 'space-between', 'row')};
  position: absolute;
  left: 0;
  right: 0;
  max-width: 376px;
  width: 100%;
  margin: 0 auto;
  padding: 81px 0;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
`;

const LoginHeaderLogoWrap = styled(Link)`
  ${theme.flexCustom('center', 'center', 'row')};
`;

const LoginHeaderLogo = styled.img`
  width: 140px;
`;

const LoginHeaderLangauge = styled.button`
  color: ${theme.black};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  font-feature-settings: 'case', 'ss02';
  cursor: pointer;
`;

const ContentsWrap = styled.div`
  ${theme.flexCustom('initial', 'center', 'column')};
  flex: 1 1 0%;
  width: 100%;
  max-width: 376px;
  padding: 24px 0;
  margin: 0 auto;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
`;

const WelcomeTitle = styled.h2`
  margin: 0 0 50px;
  padding: 0;
  color: #3a3a3a;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
`;

const LoginBtn = styled.button`
  ${theme.flexCustom('center', 'center', 'row')};
  width: 100%;
  height: 48px;
  padding: 0 20px;
  margin-bottom: 8px;
  background-color: #ffe813;
  color: ${theme.black};
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-decoration-line: none;
  transition: background-color 0.1s ease 0s;

  &:hover {
    background-color: #f7d41e;
  }

  &:last-child {
    margin-bottom: 0;
    background-color: ${theme.lightgray};

    &:hover {
      background-color: #ddd;
    }
  }
`;

const LoginBtnIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 6px;
  object-fit: cover;
`;

export default Login;

const LOGIN_SELECT_BUTTON_SUMMARY = [
  {
    id: 1,
    name: '카카오로 3초 만에 시작하기',
  },
  {
    id: 2,
    name: '다른 방법으로 시작하기',
  },
];
