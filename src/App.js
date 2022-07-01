import logo from './logo.svg';
import './assets/css/App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './screens/Home'
import Login from './screens/Login'
import BestSeller from './screens/BestSeller';
import New from './screens/New';
import Detail from './screens/Detail';
import Cart from './screens/Cart';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<Login />} />
      <Route path='/bestseller' element={<BestSeller/>}></Route>
      <Route path='/new' element={<New/>}></Route>
      <Route path='/detail/:detailId' element={<Detail/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
