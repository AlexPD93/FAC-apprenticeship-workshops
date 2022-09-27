const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const { listProducts } = require("../model/products.js");
const db = require("./db.js");

const seedPath = join("src", "database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);

console.log("DB seeded with example data");
console.log(listProducts());
