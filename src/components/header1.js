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
import Navbar from './navbar';

export default function Header1() {
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
     <div>
     <Navbar/>
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
