import React from 'react'
import logo from '../logo.svg';
import '../assets/css/App.scss';
import { 
  Button,
  Card,
  CardText,
  CardBody,
  CardGroup, 
  CardTitle, 
  CardSubtitle } from 'reactstrap'; 
  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <div>
        <div className='footer'>
          <div className='footer-content'>
          <CardGroup>
             <Card className='card-one'>
              <CardBody>
                <CardTitle tag="h5"> CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ UNICORN </CardTitle>
                <CardText>
                  <p>Tầng 10, tòa nhà Dreamplex, số 195 Điện Biên Phủ, Phường 15, quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam</p>
                  <p> Mã số thuế: 0315627066</p>
                  <p style={{paddingBottom:10}}>Giám đốc: Lê Minh Thảo</p>
                  <p style={{paddingBottom:10}}>Số điện thoại: 1900633023 </p>
                  <p style={{paddingBottom:10}}>Email:sales.merzyvietnam@gmail.com </p>
                </CardText>
              </CardBody>
            </Card>
            <Card className='card-two'>
              <CardBody>
                 <CardTitle tag="h5"> HỖ TRỢ KHÁCH HÀNG </CardTitle>
              <CardText>
                <div class="row1">
                  <a href='https://merzy.vn/pages/huong-dan-mua-hang'>Hướng dẫn mua hàng</a>
                </div>
                <div class="row1">
                  <a href='https://merzy.vn/pages/phuong-thuc-thanh-toan'>Phương Thức Thanh Toán</a>
                </div>
                <div class="row1">
                  <a href='https://merzy.vn/pages/chinh-sach-giao-hang'>Chính sách giao hàng</a>
                </div>
                <div class="row1">
                  <a href='https://merzy.vn/pages/chinh-sach-doi-tra'>Chính sách đổi trả</a>
                </div>
                <div class="row1">
                  <a href='https://merzy.vn/search'>Tìm kiếm</a>
                </div> 
                <div class="row1">
                  <a href='https://merzy.vn/pages/chinh-sach-bao-mat'>Chính sách bảo mật</a>
                </div>   
                <div class="row1">
                  <a href='https://merzy.vn/pages/about-us'>Giới thiệu</a>
                </div>
                <div class="row1">
                  <a href='https://merzy.vn/pages/dieu-khoan-dich-vu'>Điều khoản dịch vụ</a>
                </div>
          
          
              </CardText>
              </CardBody>
            </Card>
            <Card className='card-three'>
              <CardBody>
                 <CardTitle tag="h5"> GIỜ MỞ CỬA </CardTitle>
              <CardText >
              Từ 8:00 - 22:00 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).
              </CardText>
              </CardBody>
            </Card>
            <Card className='card-four'>
              <CardBody>
                 <CardTitle tag="h5"> ĐĂNG KÝ NHẬN TIN</CardTitle>
              <CardText >
              Mỗi tháng chúng tôi đều có những đợt giảm giá dịch vụ và sản phẩm nhằm chi ân khách hàng. Để có thể cập nhật kịp thời những đợt giảm giá này, vui lòng nhập địa chỉ email của bạn vào ô dưới đây.
              </CardText>
              </CardBody>
            </Card>
          </CardGroup>
          </div>
         <div className='footer-under'>
         <div className='footer-icon'>
            <a href='https://www.facebook.com/merzyvn'>
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href='https://www.facebook.com/merzyvn'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://www.facebook.com/merzyvn'>
            <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href='https://www.facebook.com/merzyvn'>
            <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
          <div className='footer-text'>
            COPYRIGHTS © 2020 BY <a href='https://merzy.vn/'>MERZY VIETNAM.</a>
          </div>
         </div>
      </div>
    </div>
  )
}
