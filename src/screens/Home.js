import logo from '../logo.svg';
import '../assets/css/App.scss';
import { 
  Button ,
  ButtonGroup } from 'reactstrap'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Index from "../components/index"
import Footer from '../components/footer';
import React, { useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { url_api } from '../assets/api';

const App= () => {
  const[data,setData]= useState([]);
  useEffect(() => {
        axios.get(`${url_api}/Products?tag=best-sellers`)
        .then(res => {
        setData(res.data);
        console.log(res.data);
        })
        .catch(error => console.log(error));
  },[]);
  return (
    <div className="App">
     <div>
        <Index/>
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
            {data?.map((item, i) => ( 
          <div className='product-list'>
            <Link to={`/detail/${item.id}`}> 
            <div className='product-item'>
              <img src={item?.link} top width="100%" />   
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
