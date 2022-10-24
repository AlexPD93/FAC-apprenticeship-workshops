export default function FilterCatagory({ category, handleCategory }) {
  return (
    <fieldset>
      <legend>Category</legend>
      <label htmlFor="all">
        <input type="radio" name="categories" id="all" value="all" />
        all
      </label>
      {category.map((c) => (
        <label htmlFor={c} key={c}>
          <input
            type="radio"
            name="categories"
            id={c}
            value={c}
            onChange={handleCategory}
          />
          {c}
        </label>
      ))}
    </fieldset>
  );
}
