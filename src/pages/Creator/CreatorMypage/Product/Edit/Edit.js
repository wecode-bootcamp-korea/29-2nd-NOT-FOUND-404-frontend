import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CreatorIntroduction from './CreatorIntroduction/CreatorIntroduction';
import Curriculum from './Curriculum/Curriculum';
import EditHeader from './EditHeader/EditHeader';
import EditSideBar from './EditSideBar/EditSideBar';
import Information from './Information/Information';
import Learn from './Learn/Learn';
import TitleCover from './TitleCover/TitleCover';
import Class from './Class/Class';
<<<<<<< HEAD
=======
import theme from '../../../../../styles/theme';
>>>>>>> 2a245c0 (기능 수정)

function Edit() {
  return (
    <div>
      <Body>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Information />} />
            <Route path="/title-cover" element={<TitleCover />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/class-introduction" element={<Class />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route
              path="/creator-introduction"
              element={<CreatorIntroduction />}
            />
          </Routes>
        </Wrapper>
        <EditSideBar />
        <EditHeader />
      </Body>
    </div>
  );
}

export default Edit;

const Body = styled.section`
  &::selection {
    background: red;
    color: #fff;
  }
`;

const Wrapper = styled.section`
  position: absolute;
  padding: 32px 0px 92px;
  top: 80px;
  left: 400px;
`;
