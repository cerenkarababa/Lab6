
function FilterForm({ filter, onFilterChange }) {
  return (
    <form className="filter-form" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="title-filter">Filter posts by title</label>

      <input
        id="title-filter"
        type="text"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
        placeholder="Enter a post title..."
      />

      {filter && (
        <button type="button" onClick={() => onFilterChange('')}>
          Clear filter
        </button>
      )}
    </form>
  )
}

export default FilterForm
