import logo from '../logo.svg';
import '../assets/css/App1.scss';
import Footer from '../components/footer';
import { Button } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { Link } from "react-router-dom";
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Dropdown } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
const App=()=> {
  return (
    <div className='User'>
        <div>
        <div className='header1'>
      <div className='header-above'>
        <div className='bcrumb-left'></div>
        <div className='bcrumb-right'>
            <div className='wrapper'>
                <div className='inner text-center'>
                    <div className='content'>
                        <div className='content-big'>
                            <h3>Tài khoản</h3>
                        </div>
                        <div className='content-small'>
                            <a>Trang chủ</a>
                            <span> / </span>
                            <span>Tài khoản</span>
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
export default App;
