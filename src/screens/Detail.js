import Footer from '../components/footer';
import '../assets/css/Detail.scss';
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useDispatch } from "react-redux";
import { url_api } from '../assets/api';
import Header from '../components/header';
import VNDFormat from '../util/Currencyformat';
export default function Detail() {
  const[data,setData]= useState([]);
  const { detailId } = useParams();
  // console.log(detailId);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`${url_api}/Products?id=${detailId}`)
    .then(res => {
      setData(res.data);
      console.log(res.data);
    }) 
    .catch(error => console.log(error));
    },[]);
    const addToCart = (item) => { 
      item.quantity = parseInt(document.querySelector(".input-quantity").value);
      dispatch({ type: "ADD_PRODUCT", data: item }); 
    }

  
  return (
    <div className='Product'>
      {/* header */}
      <Header/>
      {/* product detail */}       
        <div className='product-single'>        
          <div className='product-single-image'> 
          <img src={url_api+data[0]?.link} title={data[0]?.title} alt={data[0]?.title}/>
          </div>
          <div className='product-sing-content'>
             <div className='pro-content-head'> 
                <h1>{data[0]?.title}</h1>
             </div>
            {/* pro-text */}
             <div className='pro-text'>
              <div className='pro-brand'>
                  <span className='title'>Thương hiệu: </span>
                  <a href='/'>Merzy</a>
              </div>
              <span style={{marginLeft:5, marginRight:5}} >|</span>
              <div className='pro-type'>
                  <span className='title'>Loại: </span>
                  <a href=''>Lip</a>
              </div>
              <span style={{marginLeft:5, marginRight:5}} >|</span>
              <div className='pro-sku'>
                <span className='title'>Mã SP: </span>
                <span>8809510682681</span>
                </div>
             </div>
             {/* pro price */}
             <div className='pro-price'>
              <span className="current-price">{VNDFormat(data[0]?.newPrice)}</span>
              <span className="original-price"><s> {VNDFormat(data[0]?.oldPrice)}</s></span>
              <div className='sale-percentage'>
                <span class="PriceSaving">(Bạn đã tiết kiệm được {VNDFormat(data[0]?.oldPrice-data[0]?.newPrice)})</span>
              </div>
             </div>
             <div class="pro-short-desc">
								<p><strong>•&nbsp;</strong>Trọng lượng: {data[0]?.weight}</p>
                <p><strong>•&nbsp;</strong>Đặc trưng:</p>
                <p>- Son kem&nbsp;Merzy Bite The Beat Mellow Tint thiết kế vỏ son có màu sắc đặc trưng được thể hiện giống với màu son bên trong.</p>
                <p>- Khả năng lên màu cực kỳ chuẩn, bền màu, không lem trôi.</p>
                <p>- Độ bám màu tương đối, giữ màu trong thời gian dài.</p>
							</div>
              <div className='qty-addcart'> 
                <span className='number-qty'>Số lượng </span>
                <div className='js-qty'>
                  <button type="button" >
                    <span class="fallback-text">−</span>
                  </button>
                  <input class="input-quantity" value="1"></input>
                  <button type="button" >
                    <span class="fallback-text">+</span>
                  </button>
                </div>
              </div>
              <div className='product-actions'>
              <button type="button"  className="btnAddToCart"  onClick={()=>addToCart(data[0])}>
                <span id="AddToCartText">Thêm vào giỏ</span>
              </button>
              <button  onClick={()=>addToCart(data[0])} type="button" className="btnBuyNow">Mua ngay</button>
              </div>
          </div>
        </div>  
        {/* product desc */}
        <div className='grid'>
            <div className="product-description">
              <div className='tab'>
                <button className="pro-tablinks">Mô tả sản phẩm</button>
              </div>
              <div className='pro-item'>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_1.jpg")}`}/>
                    </p>
                </div>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_2.jpg")}`}/>
                    </p>
                </div>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_3.jpg")}`}/>
                    </p>
                </div>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_4.jpg")}`}/>
                    </p>
                </div>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_5.jpg")}`}/>
                    </p>
                </div>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_6.jpg")}`}/>
                    </p>
                </div>
                <div className='pro-tabcontent'>
                  <p  style={{marginLeft:30}} >
                    <img src={`${require("../assets/image/product-desc/mellow_7.jpg")}`}/>
                    </p>
                </div>
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
