import React, { useContext } from 'react';

import { CategoriesContext } from '../../context/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import './categories-preview.styles.scss';

const CategoriesPreviewPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className='categories-preview'>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </div>
  )
};

export default CategoriesPreviewPage;