import React, { useState } from 'react';
import errormsg from './errormsg';

function useErrorMsg() {
  const [values, setValues] = useState({
    necessary: '',
  });
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
    if (values.necessary === '') {
      setMouseOut(true);
      setErrors(errormsg(values));
    } else {
      setMouseOut(false);
    }
  };

  return { errors, mouseOut, handleChange, handleFormNext };
}

export default useErrorMsg;
