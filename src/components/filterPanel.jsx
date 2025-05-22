import classNames from 'classnames';

const FilterPanel = ({
  users,
  categories,
  selectedUser,
  setSelectedUser,
  selectedProduct,
  setSelectedProduct,
  query,
  setQuery,
  resetFilters,
}) => {
  return (
    <nav className="panel">
      <p className="panel-heading">Filters</p>
      <p className="panel-tabs has-text-weight-bold">
        <a
          href="#/"
          className={classNames({ 'is-active': selectedUser === 'all' })}
          onClick={() => setSelectedUser('all')}
        >
          All
        </a>
        {users.map(({ id, name }) => (
          <a
            key={id}
            href="#/"
            className={classNames({ 'is-active': selectedUser === name })}
            onClick={() => setSelectedUser(name)}
          >
            {name}
          </a>
        ))}
      </p>

      <div className="panel-block">
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        )}
      </div>

      <div className="panel-block is-flex-wrap-wrap">
        <a
          href="#/"
          className="button is-success mr-6 is-outlined"
          onClick={() => setSelectedProduct([])}
        >
          All
        </a>
        {categories.map(({ id, title }) => (
          <a
            key={id}
            className={classNames('button mr-2 my-1', {
              'is-info': selectedProduct.includes(title),
            })}
            href="#/"
            onClick={() => {
              setSelectedProduct(
                prev =>
                  prev.includes(title)
                    ? prev.filter(t => t !== title)
                    : [...prev, title],
                // eslint-disable-next-line function-paren-newline
              );
            }}
          >
            {title}
          </a>
        ))}
      </div>

      <div className="panel-block">
        <button
          className="button is-link is-outlined is-fullwidth"
          type="button"
          onClick={resetFilters}
        >
          Reset all filters
        </button>
      </div>
    </nav>
  );
};

export default FilterPanel;
