import dishes from "./data.js";
export default function ListDishes({ maxPrice, checkedCategory }) {
  return (
    <section aria-label="dishes">
      <ul className="grid">
        {dishes
          .filter((dish) => {
            return (
              (dish.price <= maxPrice && checkedCategory === dish.category) ||
              (dish.price <= maxPrice && dish)
            );
          })
          .map((dish) => (
            <li key={dish.id} className="card">
              <h3>{dish.name}</h3>
              {dish.description && <p>{dish.description}</p>}
              <div>£{dish.price.toFixed(2)}</div>
            </li>
          ))}
      </ul>
    </section>
  );
}
