export const BASE_URL = 'http://10.58.3.139:3000';

export const api = {
  login: BASE_URL + '/users/callback',
  products: BASE_URL + '/products',
  reviews: BASE_URL + '/reviews',
  search: BASE_URL + '/search',
  redirect_uri: 'http://localhost:3000/oauth/callback/kakao',
  kakao_token_request: BASE_URL + '/users/callback',
};
