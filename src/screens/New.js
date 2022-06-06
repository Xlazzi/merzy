import logo from '../logo.svg';
import '../assets/css/BestSeller.scss';
import Footer from '../components/footer';
import { Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle} from 'reactstrap';
import { Link } from "react-router-dom";
import React from 'react'

export default function BestSeller() {
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
                                <h3>Best Seller</h3>
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
{/* body */}
    <div className='body'>
      <div className='wrapper-body'>
        <div className='inner-body'>
        <div className='best-seller'>
            <h2 className='best-seller-text' > New</h2>
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
          <div className='product-list'>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/son-kem-li-merzy-bite-the-beat-mellow-tint-m6.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' top width="100%" />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>Son Kem Lì Merzy Bite The Beat Mellow Tint #M6</p>
            <p className='price'>
              <span className="new-price">149.000VND</span>
              <del className="old-price">249.000VND</del>
            </p>
            </div>  
            <div className='product-item'>
              <img src={`${require("../assets/image/product-banner/son-kem-li-merzy-bite-the-beat-mellow-tint-m2.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' top width="100%" />
              <div className='product-desc'>1 phiên bản màu sắc</div>
              <p className='product-text'>Son Kem Lì Merzy Bite The Beat Mellow Tint #M2</p>
              <p className='price'>
                <span className="new-price">149.000VND</span>
                <del className="old-price">249.000VND</del>
              </p>
            </div>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/Son-kem-li-merzy-the-first-velvet-tint-V16.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' top width="100%" />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>(Ver Red) Son Kem Lì Merzy The First Velvet Tint #V16</p>
            <p className='price'>
              <span className="new-price">139.000VND</span>
              <del className="old-price">249.000VND</del>
            </p>
            </div>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/son-tint-bong-merzy-aurora-dewy-tint-dt11.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' top width="100%" />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>Son Tint Bóng Merzy Aurora Dewy Tint #DT11</p>
            <p className='price'>
              <span className="new-price">149.000VND</span>
              <del className="old-price">299.000VND</del>
            </p>
            </div>
          </div>
          <div className='product-list'>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/Son-kem-li-merzy-the-first-velvet-tint-V17.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' style={{height:250}} />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>(Ver Red) Son Kem Lì Merzy The First Velvet Tint #V17</p>
            <p className='price'>
              <span className="new-price">149.000VND</span>
              <del className="old-price">249.000VND</del>
            </p>
            </div>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/son-tint-bong-merzy-aurora-dewy-tint-dt10.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' style={{height:250}} />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>Son Tint Bóng Merzy Aurora Dewy Tint #DT10</p>
            <p className='price'>
              <span className="new-price">149.000VND</span>
              <del className="old-price" >249.000VND</del>
            </p>
            </div>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/son-tint-bong-merzy-aurora-dewy-tint-dt4.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} classNameName='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' style={{height:250}} />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>Son Tint Bóng Merzy Aurora Dewy Tint #DT4</p>
            <p className='price'>
              <span className="new-price">149.000VND</span>
              <del className="old-price">299.000VND</del>
            </p>
            </div>
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/son-kem-li-merzy-bite-the-beat-mellow-tint-m1.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} classNameName='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' style={{height:250}} />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>Son Kem Lì Merzy Bite The Beat Mellow Tint #M1</p>
            <p classNameName='price'>
              <span className="new-price">129.000VND</span>
              <del className="old-price">249.000VND</del>
            </p>
             </div>  
             
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
