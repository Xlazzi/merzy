import React, {useState} from 'react';
import { Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle}from 'reactstrap'; 
import { Link } from "react-router-dom";
export default function Navbar() {
    const[navbar,setNavbar]=useState(false);
    const changBackground=()=>{
      if(window.scrollY>=80){
        setNavbar(true);
      }
      else{
        setNavbar(false);
      }
    }
    window.addEventListener('scroll',changBackground);

  return (
    <div>
         <div className={navbar ? 'header-slider active':'header-slider'}>
        {/* <div className='header-slider'> */}
          <div className='header-left'>
            <img src={`${require("../assets/image/logo.jpg")}`} alt={'logo'} className='logo' />
          </div>
        <div id='header' className='header-right '> 
            <Nav pills>
            <NavItem>
                <div className='header-right-run'> <Link to={"/"}> Trang chủ </Link> </div>
              </NavItem>
              <NavItem>
              <div className='header-right-run'> <Link className='/bestseller' to={"/bestseller"}> Best Seller </Link> </div>
              </NavItem>
              <NavItem>
              <div className='header-right-run'> <Link className='/new' to={"/new"} > New </Link> </div>
              </NavItem>
              <Dropdown nav toggle>
                <div className='header-right-run'> <DropdownToggle caret nav > Lip </DropdownToggle></div>
              </Dropdown>
              <Dropdown nav toggle>
                <div className='header-right-run'> <DropdownToggle caret nav > Eye </DropdownToggle></div>
              </Dropdown>
              <Dropdown nav toggle>
                <div className='header-right-run'> <DropdownToggle caret nav > Face </DropdownToggle></div>
              </Dropdown>
              <NavItem>
                <div className='header-right-run'> <NavLink href="#"> Blogs </NavLink></div>
              </NavItem>
              <NavItem>
               <div className='header-right-run'> <NavLink href="#"> Tìm kiếm </NavLink></div>
              </NavItem>
              <NavItem>
                <div className='header-right-run'> <Link className='user' to={"/user"}> Tài khoản </Link></div>
              </NavItem> 
              <NavItem>
                <div className='header-right-run'> <Link className='cart' to={"/cart"}> Giỏ hàng </Link></div>
              </NavItem>
            </Nav>
          </div>
        </div>
    </div>
  )
}
