const db = require("../database/db.js");

//Challenge 1
const select_products = db.prepare(/*sql*/ `
  SELECT
    id,
    name,
    quantity_per_unit,
    FORMAT('£%.2f', unit_price) AS unit_price,
    units_in_stock,
    units_on_order,
    FORMAT('£%.2f', unit_price  * units_in_stock) AS stock_value 
  FROM products
`);

function listProducts() {
  return select_products.all();
}

//Challenge 2
const search_products = db.prepare(/*sql*/ `
SELECT 
id,
name
FROM products
WHERE name LIKE ?
`);

function searchProducts(searchedProduct) {
  return search_products.all(`%${searchedProduct}%`);
}

//Challenge 3 & 4

const specific_product = db.prepare(/*sql*/ `
SELECT 
products.id,
products.name,
categories.name AS category_name,
categories.description AS category_description
FROM products
JOIN categories ON products.category_id = categories.id 
WHERE products.id = ?
`);

function getProduct(id) {
  return specific_product.get(id);
}

module.exports = { listProducts, searchProducts, getProduct };
