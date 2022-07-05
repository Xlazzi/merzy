
import Footer from '../components/footer';
// import Header from '../components/header';
import '../assets/css/Cart.scss';
import React, {useEffect, useState} from 'react'
import Navbar from '../components/navbar';

export default function Cart() {
 
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
                <form method='post'> 
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
                      <tr>
                        <td>
                          <a className='cart-image' href=''>
                          <img className='store-image-left-item-pic'  src={`${require("../assets/image/image-store/hg_img_thumb1.jpg")}`}  alt={'hg_img_thumb6'} />
                          </a>
                        </td>
                        <td>
                        <a href="" class="h4">Son Kem Lì Merzy Bite The Beat Mellow Tint #M1 </a>
                        <a href="/cart/change?line=1&amp;quantity=0" class="cart_remove">
								      	<small>Xóa</small> </a>
                        </td>
                        <td> <span class="h3">129,000₫ </span> </td>
                        <td>
                          <div className='js-qty'>     
                            <div className='decrease'>-</div>
                              <input className='input-quantity' value={1} style={{textAlign:'center'}} />
                            <div className='increase'>+</div>    
                          </div>
                        </td>
                        <td> <span class="h3"> 258,000₫	</span> </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='cart_button'>
                  <button type="submit" name="update" className="update-cart">Cập nhật</button>
                  <button type="submit" name="checkout" className="check-out-cart">Thanh toán</button>
                  </div>
                </form>
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
