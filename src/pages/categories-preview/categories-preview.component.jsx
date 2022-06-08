import React from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selectors';

const CategoriesPreviewPage = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div>
      {
        isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products} />
          })
        )
      }
    </div>
  )
};

export default CategoriesPreviewPage;