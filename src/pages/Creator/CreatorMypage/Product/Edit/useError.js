import { useState } from 'react';

const useError = (values, setValues) => {
  const [errors, setErrors] = useState({});
  const [mouseOut, setMouseOut] = useState(false);

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormNext = e => {
    e.preventDefault();

    if (Object.values(values).some(value => value === '')) {
      setMouseOut(true);
      setErrors({ necessary: '필수 입력입니다.' });
    } else {
      setMouseOut(false);
    }
  };

  const color = {
    border: mouseOut ? '#ff5252' : '#efefef',
    hover: mouseOut ? '#ff5252' : '#d7d7d7',
  };

  return { errors, mouseOut, handleChange, handleFormNext, color };
};

export default useError;
