import logo from '../logo.svg';
import '../assets/css/BestSeller.scss';
import Footer from '../components/footer';
import { Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle} from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { url_api } from '../assets/api';
import React, {useEffect, useState} from 'react'

export default function BestSeller() {
  const[data,setData]= useState([]);
  useEffect(() => {
    axios.get(`${url_api}/BestSeller`)
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
  },[]);
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
    <div className='BestSeller'> 
        <div className='header1'>
          <div className='header-above'>
            <div className='bcrumb-left'></div>
            <div className='bcrumb-right'>
                <div className='wrapper'>
                    <div className='inner text-center'>
                        <div className='content'>
                            <div className='content-big'>
                                <h3>New</h3>
                            </div>
                            <div className='content-small'>
                                <a>Trang chủ</a>
                                <span> / </span>
                                <span>New</span>
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
    <div className='body'>
      <div className='wrapper-body'>
        <div className='inner-body'>
        <div className='best-seller'>
            <h2 className='best-seller-text' >New</h2>
        </div>
        <div className='form-horizontal '>
          <label style={{paddingRight:2}}>Sắp xếp </label>
          <select>
            <option value='manual'>Tùy chọn</option>
            <option value="best-selling ">Sản phẩm bán chạy</option>
            <option value="title-ascending">Theo bảng chữ cái A - Z</option>
            <option value="title-descending">Theo bảng chữ cái Z - A</option>
            <option value="price-ascending">Giá từ thấp đến cao</option>
            <option value="price-descending">Giá từ cao đến thấp</option>
            <option value="created-descending">Mới nhất</option>
            <option value="created-ascending">Cũ nhất</option>
          </select>
        </div>
      </div>
        <div className='body-product'>
            {data?.map((item, i) => ( 
          <div className='product-list'>
            <div className='product-item'>
              <img src={item?.link} top width="100%" />   
              <div className='product-desc'>{item.desc}</div>
              <p className='product-text'>{item.title}</p>
              <p className='price'>
                <span className="new-price">{item.newPrice}</span>
                <del className="old-price">{item.oldPrice}</del>
              </p> 
              </div>
          </div>
              ))}
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
