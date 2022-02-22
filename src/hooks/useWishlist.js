import { useNavigate } from 'react-router';
import theme from '../styles/theme';
import { api } from '../config';

const useWishlist = (isOnWishlist, setIsOnWishlist) => {
  const navigate = useNavigate();

  const handleWishlist = productId => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    } else {
      setIsOnWishlist(!isOnWishlist);

      if (!isOnWishlist) {
        fetch(api.product_like, {
          method: 'POST',
          headers: {
            product_id: productId,
            Authorization: localStorage.getItem('token'),
          },
        });
      } else {
        fetch(`${api.product_like}/${productId}`, {
          method: 'DELETE',
        });
      }
    }
  };

  const LikeIconStyle = {
    className: isOnWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart',
    color: isOnWishlist ? theme.pinkred : 'inherit',
  };

  return { handleWishlist, LikeIconStyle };
};

export default useWishlist;
