import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubCate = ({ list }) => {
  return (
<<<<<<< HEAD
    <SideBar>
      <Warp>
        <Link to="">
          <SubCategory>{list}</SubCategory>
        </Link>
      </Warp>
    </SideBar>
  );
};

const SideBar = styled.div`
  position: relative;
  width: 239px;
`;

const Warp = styled.div`
  left: 0px;
  width: 239px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubCategory = styled.button`
  /* position: relative; */
  margin-top: 14px;
  /* padding: 12px 0px 12px 32px; */
=======
    <Warp>
      <Link to="">
        <SubCategory>{list}</SubCategory>
      </Link>
    </Warp>
  );
};

const Warp = styled.div`
  width: 239px;
`;

const SubCategory = styled.button`
  position: relative;
  padding: 12px 0px 12px 32px;
>>>>>>> 2a245c0 (기능 수정)
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;
<<<<<<< HEAD
  padding-left: 45px;
=======
>>>>>>> 2a245c0 (기능 수정)

  &:hover {
    background-color: #f8f8f8;
  }

  &:focus {
    background-color: #f8f8f8;
  }
`;

export default SubCate;
