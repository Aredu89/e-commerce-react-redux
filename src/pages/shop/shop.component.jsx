import { Routes, Route } from 'react-router-dom';

import CategoriesPreviewPage from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
};

export default ShopPage;