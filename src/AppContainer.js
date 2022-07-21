import logo from './logo.svg';
import './assets/css/App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home'
import Login from './screens/Login'
import Detail from './screens/Detail';
import Product from './screens/Products';
import Cart from './screens/Cart';
import NotFound from './screens/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Login />} />
        <Route path='/bestseller' element={<Product tag="BestSeller"/>}/>
        <Route path='/new' element={<Product tag="New"/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
  </BrowserRouter>
  )
}
