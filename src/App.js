import logo from './logo.svg';
import './assets/css/App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from 'reactstrap';
import { NavItem } from 'reactstrap';
import { NavLink } from 'reactstrap';
import { Dropdown } from 'reactstrap';
import { DropdownToggle } from 'reactstrap';
import { Button } from 'reactstrap';
import { UncontrolledTooltip } from 'reactstrap'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './screens/Home'
import Login from './screens/Login'
import BestSeller from './screens/BestSeller';
import New from './screens/New';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Login />} />
      <Route path='/bestseller' element={<BestSeller/>}></Route>
      <Route path='/new' element={<New/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
