import { useState } from 'react';
import theme from '../../../styles/theme';

const useWishlistToggle = () => {
  const [isOnWishlist, setIsOnWishlist] = useState(false);

  const heartClassName = isOnWishlist
    ? 'fa-solid fa-heart'
    : 'fa-regular fa-heart';
  const heartColor = isOnWishlist ? theme.red : 'inherit';

  const clickWishlist = () => {
    setIsOnWishlist(curr => !curr);
  };

  return { heartClassName, heartColor, clickWishlist };
};

export default useWishlistToggle;
