/* eslint-disable no-undef */
import type { Product } from "../types";

const BASE = "https://fakestoreapi.com";

type NextFetchOptions = globalThis.RequestInit & { next?: { revalidate?: number } };

async function fetchJson<T>(path: string, options?: NextFetchOptions): Promise<T> {
  const res = await fetch(`${BASE}${path}`, options);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return res.json();
}

export async function fetchProducts(): Promise<Product[]> {
  return fetchJson<Product[]>("/products", { next: { revalidate: 60 } });
}

export async function fetchProductById(id: number): Promise<Product | null> {
  const res = await fetch(`${BASE}/products/${id}`, { next: { revalidate: 60 } } as NextFetchOptions);
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  return fetchJson<string[]>("/products/categories", { next: { revalidate: 3600 } });
}
