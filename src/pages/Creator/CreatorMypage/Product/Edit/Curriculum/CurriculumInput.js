import React, { useState } from 'react';
import styled from 'styled-components';
import errormsg from '../errormsg';

function CurriculumInput({ com }) {
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

  return (
    <CurriculumWrap>
      <Text>커리큘럼{com}</Text>
      <form>
        <Input
          error={mouseOut}
          placeholder="작성해주세요."
          type="text"
          name="necessary"
          value={values.necessary}
          onBlur={handleFormNext}
          onChange={handleChange}
        />
        {mouseOut ? (
          <ErrorMsg>
            <ErrorIcon className="fa-solid fa-triangle-exclamation" />
            {errors.necessary}
          </ErrorMsg>
        ) : null}
      </form>
    </CurriculumWrap>
  );
}

export default CurriculumInput;

const CurriculumWrap = styled.section`
  margin-bottom: 16px;
`;

const Text = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  font-weight: ${props => (props.bold ? 700 : 400)};
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 0px 48px 0px 16px;
  width: 936px;
  height: 48px;
  border: 1px solid ${props => (props.error ? '#ff5252' : '#efefef')};
  border-radius: 3px;

  &:hover {
    border: ${props =>
      props.error ? '1px solid #ff5252;' : '1px solid #d7d7d7'};
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: #cacaca;
  }
`;

const ErrorMsg = styled.p`
  margin-top: -4px;
  padding-bottom: 16px;
  color: #ff5252;
  font-size: 11px;
  letter-spacing: -0.5px;
`;

const ErrorIcon = styled.i`
  margin-right: 4px;
`;
