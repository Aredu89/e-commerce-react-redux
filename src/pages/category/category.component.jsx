import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import {
  CategoryPageContainer,
  Title,
  ProductsSection,
} from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

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
