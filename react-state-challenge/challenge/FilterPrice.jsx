// import { useState } from "react";
export default function FilterPrice({ handlePrice }) {
  return (
    <fieldset>
      <legend>Price</legend>
      <label htmlFor="max-price">
        Max price
        <input
          type="range"
          id="max-price"
          min="0.5"
          max="9"
          step="0.25"
          onChange={handlePrice}
        />
      </label>
    </fieldset>
  );
}
