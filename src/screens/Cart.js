import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';

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
