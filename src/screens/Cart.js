import React, {useEffect, useState} from 'react'
import { Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle} from 'reactstrap';
import { Link } from "react-router-dom";
import Footer from '../components/footer';
import axios from 'axios';
import { url_api } from '../assets/api';

export default function Cart() {
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
           <div className='header1'>
          <div className='header-above'>
            <div className='bcrumb-left'></div>
            <div className='bcrumb-right'>
                <div className='wrapper'>
                    <div className='inner text-center'>
                        <div className='content'>
                            <div className='content-big'>
                                <h3>GIỎ HÀNG CỦA BẠN - MERZY VIỆT NAM</h3>
                            </div>
                            <div className='content-small'>
                                <a>Trang chủ</a>
                                <span> / </span>
                                <span> Giỏ hàng của bạn - MERZY VIỆT NAM</span>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
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
              <div className='header-right-run'> <Link className='/bestseller' to={"/bestseller"} href="#"> Best Seller </Link> </div>
              </NavItem>
              <NavItem>
              <div className='header-right-run'> <Link className='/new' to={"/new"}  href="#"> New </Link> </div>
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
                <div className='header-right-run'> <NavLink href="#" > Giỏ hàng (0) </NavLink></div>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
      {/* body */}
      <div id='page-wrapper'>
        <div className='wrapper'>
            <div className='inner'>
                <h1>Giỏ hàng</h1>
                
            </div>
        </div>
      </div>
     {/* footer */}
        <div> 
            <Footer/>
        </div>
    </div>
  )
}