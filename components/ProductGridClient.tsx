"use client";

import React, { useMemo, useState } from "react";
import type { Product } from "../types";
import ProductCard from "./ProductCard";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import JsonViewer from "./JsonViewer";

export default function ProductGridClient({ products, categories }: { products: Product[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);
  const [showJson, setShowJson] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category ? p.category === category : true;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <section className="lg:col-span-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex gap-3">
            <SearchBar value={query} onChange={setQuery} />
            <CategoryFilter categories={categories} value={category} onChange={setCategory} />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowJson((s) => !s)}
              className="px-3 py-1 text-sm bg-slate-800 text-white rounded-md"
            >
              {showJson ? "Hide JSON" : "Raw API JSON"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-6 text-gray-600">No products match your search or filter.</div>
        )}
      </section>

      <aside className="lg:col-span-1">
        <div className="json-box p-4 h-[60vh] overflow-auto">
          <h3 className="text-sm font-medium mb-2">Raw API JSON</h3>
          {showJson ? (
            <JsonViewer data={products} />
          ) : (
            <div className="text-sm text-gray-300">Collapsed — click “Raw API JSON”</div>
          )}
        </div>
      </aside>

      {selected && <Modal onClose={() => setSelected(null)}>
        <div className="p-4 md:p-6 max-w-3xl">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img src={selected.image} alt={selected.title} className="w-full object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{selected.title}</h2>
              <div className="mb-2 text-sm text-gray-600">{selected.category}</div>
              <div className="text-lg font-bold mb-4">${selected.price.toFixed(2)}</div>
              <p className="text-gray-700">{selected.description}</p>
              {selected.rating && (
                <div className="mt-4 text-sm text-yellow-600">⭐ {selected.rating.rate} ({selected.rating.count})</div>
              )}
              <div className="mt-6">
                <a href={`/product/${selected.id}`} className="text-sm text-sky-600 underline">Open product page</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>}
    </div>
  );
}
