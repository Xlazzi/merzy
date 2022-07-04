import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import '../assets/css/Cart.scss';

export default function Cart() {
    return (
    <div className='cart'>
      {/* header */}
       <Header/>
      {/* body */}
      <div id='page-wrapper'>
        <div className='wrapper'>
            <div className='inner'>
                <h1>Giỏ hàng</h1>
                <form method='post'> 
                  <table>
                    <thead>
                      <tr>
                      <th colspan="2" class="text-center">Thông tin chi tiết sản phẩm</th>
                      <th class="text-center">Đơn giá</th>
                      <th class="text-center">Số lượng</th>
                      <th class="text-right">Tổng giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href=''></a>
                        </td>
                        <td>
                        <a href="" class="h4">Son Kem Lì Merzy Bite The Beat Mellow Tint #M1 </a>
                        <a href="/cart/change?line=1&amp;quantity=0" class="cart__remove">
								      	<small>Xóa</small> </a>
                        </td>
                        <td> <span class="h3">129,000₫ </span> </td>
                        <td>
                          <div className='js-qty'>     
                            <div className='decrease'>-</div>
                              <input className='input-quantity' />
                            <div className='increase'>+</div>    
                          </div>
                        </td>
                        <td> <span class="h3"> 258,000₫	</span> </td>
                      </tr>
                    </tbody>
                  </table>
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
