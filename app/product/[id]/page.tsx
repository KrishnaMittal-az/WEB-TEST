import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchProductById } from "../../../lib/api";
import type { Product } from "../../../types";

type Params = { params: { id: string } };

export default async function ProductPage({ params }: Params) {
  const id = Number(params.id);
  const product: Product | null = await fetchProductById(id);
  if (!product) return notFound();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 md:w-1/3">
          <div className="relative w-full h-72">
            <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600 mb-4">{product.category}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
