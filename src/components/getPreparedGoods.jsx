/* eslint-disable function-paren-newline */

export function getPreparedGoods(
  prodArray,
  { query = '', selectedUser = 'all', selectedProduct = [] },
) {
  let prepared = [...prodArray];

  const normalized = query.trim().toLowerCase();

  if (normalized) {
    prepared = prepared.filter(({ product }) =>
      product.name.toLowerCase().includes(normalized),
    );
  }

  if (selectedUser !== 'all') {
    prepared = prepared.filter(({ user }) => user.name === selectedUser);
  }

  if (selectedProduct.length) {
    prepared = prepared.filter(({ category }) =>
      selectedProduct.includes(category.title),
    );
  }

  return prepared;
}
