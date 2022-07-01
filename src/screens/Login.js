import logo from '../logo.svg';
import '../assets/css/Login.scss';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import {Button,
        Form,
        FormGroup,
        Input} from 'reactstrap';
import React from 'react'
import Header from '../components/header';

export default function Login() {
  return (
    <div className='User'>
        <div>
        <Header/>
        </div>
        <div className='Login'>
          <div className='Login-main'>
            <h1>Đăng nhập</h1>
            <div className='Login-text'>
              <Form inline>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                  <Input id="exampleEmail" className="email" placeholder="Email" type="email"/>
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                  <Input id="examplePassword"className="password"placeholder="Mật khẩu" type="password" />
                </FormGroup>
                <Button>Đăng nhập</Button>
              </Form>
            </div>
            <Link to ={"/"} className="go-back" >Trở về</Link>
            <Link to ={"/"} className="sing-up" >Đăng ký</Link>
            <Link to ={"/"} className="forgot-passwork" >Quên mật khẩu?</Link>
            </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

