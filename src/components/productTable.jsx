import classNames from 'classnames';

const ProductTable = ({ products }) => {
  if (!products.length) {
    return <p>No products matching selected criteria</p>;
  }

  return (
    <table className="table is-striped is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Category</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ product, category, user }) => (
          <tr key={product.id}>
            <td className="has-text-weight-bold">{product.id}</td>
            <td>{product.name}</td>
            <td>{`${category.icon} - ${category.title}`}</td>
            <td
              className={classNames({
                'has-text-link': user.sex === 'm',
                'has-text-danger': user.sex === 'f',
              })}
            >
              {user.name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
