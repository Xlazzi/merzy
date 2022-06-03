import React from 'react'
import logo from '../logo.svg';
import '../assets/css/App.scss';
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Dropdown } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
import { Button } from 'reactstrap';
import { ButtonGroup } from 'reactstrap';
import { UncontrolledTooltip } from 'reactstrap'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className='header'>
      <div className='under-header' style={{height:721}}>
        <img src={`${require("../assets/image/poster2.jpg")}`} alt={'poster2'} className='poster'style={{height:721}} />
        </div>
        <div className='header-slider'>
        <div className='header-left'>
          <img src={`${require("../assets/image/logo.jpg")}`} alt={'logo'} className='logo' />
        </div>
        <div id='header' className='header-right srcolldown '> 
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
{/* <script>
  window.onscroll = changPos;
  function changPos () {
    var header = $("$header");
    var headerheight = $("$header").height();
    if(window.pageYOffset > headerheight){ 
      header.addClassName("srcolldown");
    }else{
      header.removeaddClassName("srcolldown");
         }
      }
</script>  */}
