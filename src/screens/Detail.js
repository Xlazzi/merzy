import Footer from '../components/footer';
import '../assets/css/Detail.scss';
import { Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle} from 'reactstrap';
import { Link } from "react-router-dom";
import React from 'react'

export default function Detail() {
  return (
    <div className='Product'>
      {/* header */}
         <div className='header1'>
          <div className='header-above'>
            <div className='bcrumb-left'></div>
            <div className='bcrumb-right'>
                <div className='wrapper'>
                    <div className='inner text-center'>
                        <div className='content'>
                            <div className='content-big'>
                                <h3>Best Seller</h3>
                            </div>
                            <div className='content-small'>
                                <a>Trang chủ</a>
                                <span> / </span>
                                <span>Best Seller</span>
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
        <div id='header' className='header-right srcolldown '> 
            <Nav pills>
            {/* <NavItem>
                <div className='header-right-run'> <Link to={"/"}> Trang chủ </Link> </div>
              </NavItem> */}
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
      {/* product detail */}
        <div className='product-single'>
          <div className='product-single-image'> 
          <img src={`${require("../assets/image/product-banner/Son-kem-li-merzy-the-first-velvet-tint-V16.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'}/>
          </div>
          <div className='product-sing-content'>
             <div className='pro-content-head'> 
                <h1>Son Kem Lì Merzy Bite The Beat Mellow Tint #M2</h1>
             </div>
             <div>
             <div className='pro-brand'>
                <span className='title'>Thương hiệu: </span>
                <a href='#'>Merzy</a>
             </div>
             <span style={{marginLeft:5, marginRight:5}} >|</span>
             <div className='pro-type'>
                <span className='title'>Loại: </span>
                <a href='#'>Lip</a>
             </div>
             <span style={{marginLeft:5, marginRight:5}} >|</span>
             <div className='pro-sku'>
              <span className='title'>Mã SP: </span>
              <span>8809510682681</span>
             </div></div>
          </div>
        </div>  
      {/* footer */}
      <div> 
            <Footer/>
        </div>
    </div>
  )
}
