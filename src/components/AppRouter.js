import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import NavBar from 'components/NavBar';
import Products from 'components/Products';
import ProductDetail from 'components/ProductDetail';

function NotFound() {
  return <label>Not Found</label>;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/products" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
