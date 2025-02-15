import React from 'react'
import styled from 'styled-components';
import { NavLink as Navlink} from 'react-router-dom';
import Navbar from './Navbar';
const Header = () => {
  return (
    <MainHeder>
      <Navlink to="/"><img src="./images/logo.png" alt="" /></Navlink>
      <Navbar/>
    </MainHeder>
  )
}
const MainHeder = styled.header` 
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;
export default Header
