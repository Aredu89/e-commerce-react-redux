import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/categories.selectors';

import {
  CategoryPageContainer,
  Title,
  ProductsSection,
} from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return(
    <CategoryPageContainer>
      <Title>{category?.toUpperCase()}</Title>
      <ProductsSection>
        {
          products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </ProductsSection>
    </CategoryPageContainer>
  );
};

export default Category;
