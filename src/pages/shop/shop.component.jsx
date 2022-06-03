import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCategoriesAndDocuments } from '../../firebase/firebase.utils.js';
import CategoriesPreviewPage from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategories } from '../../store/categories/categories.actions.js';

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
};

export default ShopPage;