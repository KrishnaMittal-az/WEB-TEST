"use client";

import React from "react";
import type { Product } from "../types";

export default function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <article className="bg-white rounded-lg shadow p-3 hover:shadow-md transition-shadow cursor-pointer" onClick={onOpen} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onOpen(); }}>
      <div className="h-40 flex items-center justify-center mb-3">
        <img src={product.image} alt={product.title} className="max-h-36 object-contain" />
      </div>
      <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.title}</h3>
      <div className="flex items-center justify-between text-sm">
        <div className="font-semibold">${product.price.toFixed(2)}</div>
        <div className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded">{product.category}</div>
      </div>
      {product.rating && <div className="mt-2 text-xs text-yellow-600">⭐ {product.rating.rate}</div>}
    </article>
  );
}
