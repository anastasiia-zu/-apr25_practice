import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import FilterPanel from './components/filterPanel';
import ProductTable from './components/productTable';
import { getPreparedGoods } from './components/getPreparedGoods';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(
    cat => cat.id === product.categoryId,
  );

  const user = usersFromServer.find(person => person.id === category.ownerId);

  return { product, category, user };
});

export const App = () => {
  const [selectedUser, setSelectedUser] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [query, setQuery] = useState('');

  const visibleProducts = getPreparedGoods(products, {
    query,
    selectedUser,
    selectedProduct,
  });

  const resetFilters = () => {
    setQuery('');
    setSelectedProduct([]);
    setSelectedUser('all');
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <FilterPanel
            users={usersFromServer}
            categories={categoriesFromServer}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            query={query}
            setQuery={setQuery}
            resetFilters={resetFilters}
          />
        </div>

        <div className="box table-container">
          <ProductTable products={visibleProducts} />
        </div>
      </div>
    </div>
  );
};
