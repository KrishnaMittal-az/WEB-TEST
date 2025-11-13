import React from "react";
import ProductGridClient from "../components/ProductGridClient";
import { fetchProducts, fetchCategories } from "../lib/api";
import type { Product } from "../types";

export default async function Home() {
  const products: Product[] = await fetchProducts();
  const categories = await fetchCategories();

  return (
    <main>
      <ProductGridClient products={products} categories={categories} />
    </main>
  );
}
