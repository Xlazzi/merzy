import logo from '../logo.svg';
import '../assets/css/Product.scss';
import Footer from '../components/footer';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';
import { url_api } from '../assets/api';
import React, {useEffect, useState} from 'react'
import Header from '../components/header';


export default function BestSeller(props) {
  const[data,setData]= useState([]);
  const {tag} = props;
  const location = useLocation();
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
  },[location]);

  return (
    <div className='BestSeller'> 
       <Header/>
{/* body */}
    <div className='body'>
      <div className='wrapper-body'>
        <div className='inner-body'>
        <div className='best-seller'>
            <h2 className='best-seller-text' > {tag === "BestSeller" ? "Best Seller": "new"}</h2>
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
            <Link to={`/detail/${item.id}`}> 
            <div className='product-item'>
              <img src={url_api+item?.link} top width="100%" />   
              <div className='product-desc'>{item.desc}</div>
              <p className='product-text'>{item.title}</p>
              <p className='price'>
                <span className="new-price">{item.newPrice}</span>
                <del className="old-price">{item.oldPrice}</del>
              </p> 
              </div>
              </Link>
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
