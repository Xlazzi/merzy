import Footer from '../components/footer';
import '../assets/css/Detail.scss';
import { Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle} from 'reactstrap';
import { Link } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
import { url_api } from '../assets/api';

export default function Detail() {
  const[navbar,setNavbar]=useState(false);
  const[data,setData]= useState([]);
  const { detailId } = useParams();
  // console.log(detailId);
  useEffect(() => {
    axios.patch(`${url_api}/BestSeller/${detailId}`, detailId )
    .then(res => {
      setData(res.data);
      console.log(res.data);
    }) 
    .catch(error => console.log(error));
    },[]);
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
            <div className={navbar ? 'header-slider active':'header-slider'}>
          <div className='header-left'>
            <img src={`${require("../assets/image/logo.jpg")}`} alt={'logo'} className='logo' />
          </div>
        <div id='header' className='header-right srcolldown '> 
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
      {/* product detail */}       
        <div className='product-single'>        
          <div className='product-single-image'> 
          <img src={data.link} title={data.title} alt={data.title}/>
          </div>
          <div className='product-sing-content'>
             <div className='pro-content-head'> 
                <h1>{data.title}</h1>
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
              <span className="current-price">{data.newPrice}</span>
              <span className="original-price"><s> {data.oldPrice}</s></span>
              <div className='sale-percentage'>
                <span class="PriceSaving">(Bạn đã tiết kiệm được 150,000₫)</span>
              </div>
             </div>
             <div class="pro-short-desc">
								<p><strong>•&nbsp;</strong>Trọng lượng: {data.weight}</p>
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
              <button type="button"  className="btnAddToCart">
                <span id="AddToCartText">Thêm vào giỏ</span>
              </button>
              <button type="button" className="btnBuyNow">Mua ngay</button>
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
