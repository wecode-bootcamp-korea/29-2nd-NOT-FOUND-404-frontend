const errormsg = values => {
  let errors = {};
  if (values.necessary === '') {
    errors.necessary = '필수 입력입니다.';
  }

  return errors;
};

export default errormsg;
