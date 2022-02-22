import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const SearchAssessment = ({ url, name }) => {
  return (
    <AssessmentIndividual>
      <AssessmentIcon src={'/images/Search/' + url} />
      <AssessmentText>{name}</AssessmentText>
    </AssessmentIndividual>
  );
};

export default SearchAssessment;

const AssessmentIndividual = styled.div`
  ${theme.flexCustom('center', 'flex-start', 'row')};
  margin: 0px 8px 0px 0px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  -webkit-box-align: center;
`;

const AssessmentIcon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: cover;
`;

const AssessmentText = styled.span`
  margin-left: 5px;
  color: ${theme.gray};
  font-size: 11px;
`;
