"use client";

import React from "react";
import Image from "next/image";
import type { Product } from "../types";

export default function ProductCard({ product, onOpen }: { product: Product; onOpen: () => void }) {
  return (
    <article className="bg-white rounded-lg shadow flex flex-col hover:shadow-md transition-shadow">
      <button
        className="text-left p-3 flex-1"
        onClick={onOpen}
        aria-label={`Open details for ${product.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onOpen();
        }}
      >
      <div className="relative h-44 mb-3">
        <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain" />
      </div>
      <h3 className="text-sm font-medium line-clamp-2 mb-2 text-center">{product.title}</h3>
      <div className="text-center text-xs text-gray-600 mb-3">${product.price.toFixed(2)} USD</div>
      {product.rating && <div className="text-center text-xs text-yellow-600 mb-2">⭐ {product.rating.rate}</div>}
      </button>
      <div className="p-3 pt-0">
        <button onClick={onOpen} className="w-full bg-black text-white rounded-md py-2 text-sm">View Details</button>
      </div>
    </article>
  );
}
