import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { DETAIL_NAV } from './detailNavData';
import theme from '../../../../styles/theme';

const DetailNav = ({ scrollRef }) => {
  const [navIndex, setNavIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth' });
    setNavIndex(null);
  }, [scrollRef, navIndex]);

  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach(ref => {
            ref.className = ref.className.replace(' active', '');
          });
          navRef.current[idx].className += ' active';
        } else return;
      });
    };

    window.addEventListener('scroll', changeNavBtnStyle);

    return () => {
      window.removeEventListener('scroll', changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <StyledDetailNav>
      {DETAIL_NAV.map(({ idx, name }) => (
        <NavBtn
          key={idx}
          ref={ref => (navRef.current[idx] = ref)}
          onClick={() => {
            setNavIndex(idx);
          }}
        >
          {name}
        </NavBtn>
      ))}
    </StyledDetailNav>
  );
};

const StyledDetailNav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: ${theme.white};
  box-shadow: ${theme.lightgray} 0px -1px 0px 0px inset;
  white-space: nowrap;
  z-index: 2;
  overflow-x: auto;
`;

const NavBtn = styled.button`
  position: relative;
  padding: 14px 0 10px;
  margin-right: 32px;
  border-bottom: 3px solid transparent;
  color: ${theme.gray};
  font-size: 15px;
  line-height: 20px;

  &.active {
    border-color: ${theme.black};
    color: ${theme.black};
    font-weight: bold;
  }
`;

export default DetailNav;
