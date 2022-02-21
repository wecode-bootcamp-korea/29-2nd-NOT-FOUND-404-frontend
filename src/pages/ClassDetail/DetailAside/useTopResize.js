import { useState, useEffect, useRef } from 'react';

const useTopResize = () => {
  const asideRef = useRef();
  const [top, setTop] = useState('0');

  useEffect(() => {
    const resizeTop = e => {
      setTop(asideRef.current.offsetTop < window.scrollY ? '71px' : '0');
    };

    window.addEventListener('scroll', resizeTop);

    return () => {
      window.removeEventListener('scroll', resizeTop);
    };
  }, []);

  return { asideRef, top };
};

export default useTopResize;
