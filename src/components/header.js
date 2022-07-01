import React, {useEffect, useState} from 'react'
import logo from '../logo.svg';
import '../assets/css/Product.scss';
import { Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        Button,
        UncontrolledTooltip} from 'reactstrap'; 
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import axios from 'axios';
import { url_api } from '../assets/api';
import Navbar from './navbar';

export default function Header(props) {
  const[data,setData]= useState([]);
  const {tag} = props;
  useEffect(() => {
    if(tag === "BestSeller"){
        axios.get(`${url_api}/Products?tag=best-sellers`)
        .then(res => {
        setData(res.data);
        console.log(res.data);
        })
        .catch(error => console.log(error));
    }
    else{
        axios.get(`${url_api}/Products?tag=new`)
        .then(res => {
        setData(res.data);
        console.log(res.data);
        })
        .catch(error => console.log(error));
    }
  },[]);

  return (
    <div className='header'>
    <div className='header-above'>
      <div className='bcrumb-left'></div>
      <div className='bcrumb-right'>
          <div className='wrapper'>
              <div className='inner text-center'>
                  <div className='content'>
                      <div className='content-big'>
                          <h3>{tag === "BestSeller" ? "Best Seller": "New"}</h3>
                      </div>
                      <div className='content-small'>
                          <a>Trang chủ</a>
                          <span> / </span>
                          <span>{tag === "BestSeller" ? "Best Seller": "New"}</span>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
        <div className='header-slider'>
          <div className='header-left'>
            <img src={`${require("../assets/image/logo.jpg")}`} alt={'logo'} className='logo' />
          </div>
       <div>
        <Navbar/>
       </div>
    </div>
    </div>
  )
}
