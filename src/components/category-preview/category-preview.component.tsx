import { Category } from '../../store/categories/categories.types.js';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({
  title,
  items
}: Category) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title.toUpperCase()}</Title>
      <Preview>
        {
          items
            .filter((_, idx) => idx < 4)
            .map((product)=>(
              <ProductCard key={product.id} product={product} />
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  )
};

export default CategoryPreview;