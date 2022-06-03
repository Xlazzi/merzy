import logo from '../logo.svg';
import '../assets/css/App.scss';
import { 
  Button ,
  ButtonGroup ,
  Card,
  CardImg,
  CardGroup} from 'reactstrap'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header"
import Footer from '../components/footer';
import React from 'react';



const App= () => {
  return (
    <div className="App">
     <div>
        <Header/>
     </div>

      {/* body */}
      <div className='body'>
        <div className='product-hot'>
        <h2 className='product-hot-text' > Sản phẩm nổi bật</h2>
        </div>
        <div className='body-button'> 
          <div className='body-button-text'> 
            <ButtonGroup>
                <Button> Best Seller </Button>
                <Button> What's new </Button>
                <Button> On Sale </Button>
              </ButtonGroup>
          </div>
        <div className='body-product'>
          <div className='product-list'>
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
            <div className='product-item'>
            <img src={`${require("../assets/image/product-banner/son-kem-li-merzy-bite-the-beat-mellow-tint-m6.jpg")}`} alt={'son-kem-li-merzy-bite-the-beat-mellow-tint-m2'} className='son-kem-li-merzy-bite-the-beat-mellow-tint-m2' top width="100%" />
            <div className='product-desc'>1 phiên bản màu sắc</div>
            <p className='product-text'>Son Kem Lì Merzy Bite The Beat Mellow Tint #M6</p>
            <p className='price'>
              <span className="new-price">149.000VND</span>
              <del className="old-price">249.000VND</del>
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
      {/* store image */}
      <div className='store'>
      <h2 className='store-image-text'>Kho ảnh</h2>
      <div className='store-image'>
        <div className='store-image-left'>
          <div className='store-image-left-item'>
            <img className='store-image-left-item-pic' src={`${require("../assets/image/image-store/hg_img_thumb1.jpg")}`} alt={'hg_img_thumb1'} style={{height:200}} />
          </div>
          <div className='store-image-left-item'>
            <img className='store-image-left-item-pic' src={`${require("../assets/image/image-store/hg_img_thumb2.jpg")}`} alt={'hg_img_thumb2'} style={{height:200}}/>
          </div>
          <div className='store-image-left-item'>
            <img className='store-image-left-item-pic' src={`${require("../assets/image/image-store/hg_img_thumb3.jpg")}`} alt={'hg_img_thumb3'} style={{height:200}}/>
          </div>
          <div className='store-image-left-item'>
            <img  className='store-image-left-item-pic' src={`${require("../assets/image/image-store/hg_img_thumb4.jpg")}`} alt={'hg_img_thumb4'} style={{height:200}}/>
          </div>
          <div className='store-image-left-item'>
            <img className='store-image-left-item-pic' src={`${require("../assets/image/image-store/hg_img_thumb5.jpg")}`} alt={'hg_img_thumb5'} style={{height:200}}/>
          </div>
          <div className='store-image-left-item'>
            <img className='store-image-left-item-pic' src={`${require("../assets/image/image-store/hg_img_thumb6.jpg")}`} alt={'hg_img_thumb6'}style={{height:200}} />
          </div>
        </div>
        <div className='store-image-right'>
            <iframe width="555" height="443.48"  src={`${("https://www.youtube.com/embed/1w94_mCNhzQ")}`} title="YouTubevideo player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      </div>
   {/* footer */} 
   <div>
       <Footer/>
   </div>
    </div>
  );
}

export default App;
