import './assets/css/bootstrap.min.css'
import './assets/css/tiny-slider.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import Admin from './Admin/Admin';
import HeaderAdmin from './Admin/HeaderAdmin';
import LoginAdmin from './Admin/LoginAdmin';
import Registeradmin from './Admin/Registeradmin';

import OrderList from './Admin/OrderList';
import OrderDetails from './Admin/OrderDetails';

import ProductList from './Admin/ProductList';
import CreateProduct from './Admin/CreateProduct';
import CreateCategory from './Admin/CreateCategory'
import CategoryList from './Admin/CategoryList'
import InvetoryList from './Admin/InvetoryList';

function App() {
  const {invetory} = useStateContext();
  return (
    <Router>
    <Routes>

      <Route path='/admin' element={
        <>
          <HeaderAdmin />
          <Admin />
        </>
      } />

      <Route path='/admin/login' element={
        <>
          <HeaderAdmin />
          <LoginAdmin />
        </>
      } />

      <Route path='/admin/register' element={
        <>
          <HeaderAdmin />
          <Registeradmin />
        </>
      } />

      <Route path='/admin/products' element={
        <>
          <HeaderAdmin />
          <ProductList />
        </>
      } />
      <Route path='/admin/invetory' element={
        <>
          <HeaderAdmin />
          <InvetoryList />
        </>
      } />

      <Route path='/admin/createproduct' element={
        <>
          <HeaderAdmin />
          <CreateProduct />
        </>
      } />

      <Route path='/admin/categories'
        element={
          <>
            <HeaderAdmin />
            <CategoryList />
          </>
        }
      />

      <Route path='/admin/createcategories' element={
        <>
          <HeaderAdmin />
          <CreateCategory />
        </>
      } />

      <Route path='/admin/orders' element={
        <>
          <HeaderAdmin />
          <OrderList />
        </>
      } />

      <Route path='/admin/order/:/id' element={
        <>
          <HeaderAdmin />
          <OrderDetails />
        </>
      } />

    </Routes>
  </Router>
  );
}

export default App;
