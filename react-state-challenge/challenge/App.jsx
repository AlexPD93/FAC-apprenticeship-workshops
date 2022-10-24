import { useState } from "react";
import dishes from "./data.js";
import FilterPrice from "./FilterPrice.jsx";
import FilterCatagory from "./FilterCategory.jsx";
import ListDishes from "./ListDishes.jsx";

// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

function App() {
  const [maxPrice, setMaxPrice] = useState(9);
  const [checkedCategory, setCheckedCategory] = useState("");
  const handleCategory = (e) => {
    setCheckedCategory(e.target.value);
  };
  const handlePrice = (e) => {
    setMaxPrice(e.target.value);
  };
  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice handlePrice={handlePrice} />
            <FilterCatagory
              category={categories}
              handleCategory={handleCategory}
            />
          </form>
        </div>
      </section>
      <ListDishes maxPrice={maxPrice} checkedCategory={checkedCategory} />
    </main>
  );
}

export default App;
