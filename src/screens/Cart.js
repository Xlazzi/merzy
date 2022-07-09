
import Footer from '../components/footer';
// import Header from '../components/header';
import '../assets/css/Cart.scss';
import React, {useEffect, useState} from 'react'
import Navbar from '../components/navbar';
import { useSelector, useDispatch } from "react-redux";
import { url_api } from '../assets/api';
import VNDFormat from '../util/Currencyformat';

export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector(store => store.productReducer.cart); 

const changeQuantity=(type,item)=>{
    if (type === 'increase') {
      dispatch({ type: "DECREASE_PRODUCT", data: { ...item, quantity: Number(item?.quantity) + 1 }}); 
    } else {
      dispatch({ type: "DECREASE_PRODUCT", data: { ...item, quantity: Number(item?.quantity) >= 1 ? Number(item?.quantity) - 1 : 0 }}); 
    }
}


  // const delCart = (item) => { dispatch({ type: "DELETE_CART", data: item }); }
  const delCart =(item)=> () => {
    dispatch({
      type: "DELETE_CART", 
      data: item
    }) };
    return (
    <div className='cart'>
      {/* header */}
       {/* <Header/> */}
      {/* body */}
      <div className='header'>
        <div className='header-above'>
          <div className='bcrumb-left'></div>
          <div className='bcrumb-right'>
              <div className='wrapper'>
                  <div className='inner text-center'>
                      <div className='content'>
                          <div className='content-big'>
                              <h3>Cart</h3>
                          </div>
                          <div className='content-small'>
                              <a>Trang chủ</a>
                              <span> / </span>
                              <span>Cart</span>
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
      <div id='page-wrapper'>
        <div className='wrapper'>
            <div className='inner'>
                <h1>Giỏ hàng</h1>     
                  <table>
                    <thead>
                      <tr className='head_name'>
                      <th colspan="2" >Thông tin chi tiết sản phẩm</th>
                      <th >Đơn giá</th>
                      <th >Số lượng</th>
                      <th >Tổng giá</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartData?.map((item, i) => {
                      return ( 
                      <tr>
                        <td>
                          <a className='cart-image' href=''>
                          <img className='store-image-left-item-pic'  src={url_api+item?.link}  alt={'hg_img_thumb6'} />
                          </a>
                        </td>
                        <td>
                        <a href="" class="h4">{item?.title}</a>
                        
								      	<small class="cart_remove" onClick={delCart(item)} >Xóa</small>
                        </td>
                        <td> <span class="h3">{VNDFormat(item?.newPrice)} </span> </td>
                        <td>
                          <div className='js-qty'>     
                            <div onClick={() => changeQuantity('reduce', item)} className='decrease'>-</div>
                              <input  className='input-quantity'  value={item?.quantity} style={{textAlign:'center'}} />
                            <div onClick={() => changeQuantity('increase', item)} className='increase'>+</div>    
                          </div>
                        </td>
                        <td> <span class="h3"> {VNDFormat(item?.newPrice * item?.quantity)}	</span> </td>
                      </tr>
                    )})}
                    </tbody>
                  </table>
                  <div className='cart_button'>
                  <button type="submit" name="update" className="update-cart">Cập nhật</button>
                  <button type="submit" name="checkout" className="check-out-cart">Thanh toán</button>
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
