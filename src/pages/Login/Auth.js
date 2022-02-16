import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import qs from 'qs';
import Loding from './Loding';
import { api } from '../../config';

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const client_id = process.env.REACT_APP_KAKAO_API;
  const redirect_uri = api.redirect_uri;

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id,
      redirect_uri,
      code,
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );
      const access_token = res.data.access_token;

      fetch(api.kakao_token_request, {
        method: 'POST',
        headers: {
          'access-token': access_token,
        },
      })
        .then(res => res.json())
        .then(userInfo => {
          if (userInfo) {
            alert('로그인 성공하였습니다.');
            localStorage.setItem('token', userInfo.token);
            navigate('/');
          } else {
            alert('로그인 실패하였습니다.');
            navigate('/login');
          }
        });
    } catch (err) {
      alert(err);
    }
  };

  getToken();

  return <Loding />;
};
export default Auth;
