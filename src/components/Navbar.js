import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';   
import { Link as ScrollLink } from 'react-scroll';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaDog } from 'react-icons/fa';
import { GiDogHouse } from 'react-icons/gi';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ navbar }) => (navbar ? '#FF9B42' : '')};
  transition: 0.2s ease-in-out;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;  
  text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    font-weight: 600;
`;

const MenuBars = styled(GiDogHouse)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        color: #fff;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 40%);
    }
`; 

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}

    &:hover {
      text-shadow: 2px 2px 4px #000000; 
    }
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const Navbar = ({ toggle }) => {
    const [nav, setNav] = useState(false);

    useEffect (() => {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= (window.innerHeight / 4)) {
                setNav(true)
            } else {
                setNav(false)
            }
        })
    },[])

    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Nav navbar={nav}>
            <Logo to="/" onClick={ScrollToTop}>LEXI<FaDog /></Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <ScrollLink to="contact" smooth={true}><Button>Contact Us</Button></ScrollLink>
            </NavBtn>
        </Nav>
    )
}

export default Navbar