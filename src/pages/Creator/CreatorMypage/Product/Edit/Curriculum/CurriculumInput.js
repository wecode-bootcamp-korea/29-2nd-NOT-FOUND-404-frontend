import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import useError from '../useError';

function CurriculumInput({ com }) {
  const [values, setValues] = useState({
    curriculum: '',
  });

  const { errors, mouseOut, handleChange, handleFormNext, color } = useError(
    values,
    setValues
  );

  return (
    <CurriculumWrap>
      <Text>커리큘럼{com}</Text>
      <form>
        <Input
          placeholder="작성해주세요."
          type="text"
          name="curriculum"
          error={mouseOut}
          value={values.nickname}
          onBlur={handleFormNext}
          onChange={handleChange}
          color={color}
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
    color: ${theme.silvergray};
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
