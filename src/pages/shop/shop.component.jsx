import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProductsContext } from '../../context/products.context';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const ShopPage = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='shop-page'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
};

export default ShopPage;