import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';
import '../assets/css/App.scss';
import { Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        Button,
        UncontrolledTooltip} from 'reactstrap'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import axios from 'axios';
import { url_api } from '../assets/api';
export default function Header() {
  const[data,setData]= useState([]);
  const[navbar,setNavbar]=useState(false);
  useEffect(() => {
    axios.get(`${url_api}/header`)
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
  },[]);
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
      <div className='header'>
      <div className='under-header' style={{height:721}}>
       <Carousel controls={false}>
        {data?.map((item, i) => (
          <Carousel.Item>
          <img src={item?.link} alt={item?.title} className='poster'style={{height:721}} />
         </Carousel.Item>
        ))}
    
    </Carousel>
        </div>
        <div className={navbar ? 'header-slider active':'header-slider'}>
        <div className='header-left'>
          <img src={`${require("../assets/image/logo.jpg")}`} alt={'logo'} className='logo' />
        </div>
        <div id='header' className='header-right'> 
            <Nav pills>
            {/* <NavItem>
                <div className='header-right-run'> <Link to={"/"}> Trang chủ </Link> </div>
              </NavItem> */}
              <NavItem>
                <div className='header-right-run'> <Link className='/bestseller' to={"/bestseller"} href="#"> Best Seller </Link> </div>
              </NavItem>
              <NavItem>
                <div className='header-right-run'> <NavLink href="#"> New </NavLink> </div>
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
                {/* <div className='header-right-run'> <NavLink href="#"> Blogs </NavLink></div> */}
                <div className='header-right-run'> <Link className='/bestseller' to={"/detail"} href="#"> Detail </Link> </div>
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
        <div className='header-content'>
          <p className='header-content-one'> Announcement:	</p> 
          <p className='header-content-two' > MERZY IS NOW </p>
          <p className='header-content-three'> AVAILABLE IN VIETNAM </p>         
          <div className='header-button'>
            <div className="text-center-one">
              <Button id="ScheduleUpdateTooltip" className='text-center-one-first'>
                Mua Ngay
              </Button>
              <UncontrolledTooltip placement="top" target="ScheduleUpdateTooltip" trigger="click" />
            </div>
            <div className="text-center-two">
              <Button id="ScheduleUpdateTooltip" className='text-center-two-second'>
                Giới thiệu
              </Button>
              <UncontrolledTooltip placement="top" target="ScheduleUpdateTooltip" trigger="click" />
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
