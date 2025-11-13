/* eslint-disable no-undef */
import type { Product } from "../types";

const BASE = "https://fakestoreapi.com";

type NextFetchOptions = globalThis.RequestInit & { next?: { revalidate?: number } };

async function safeJson<T>(path: string, options?: NextFetchOptions, fallback?: T): Promise<T> {
  try {
    const res = await fetch(`${BASE}${path}`, options);
    if (!res.ok) {
      // Return fallback on non-200 to avoid failing static builds
      return (fallback as T);
    }
    return res.json();
  } catch (_e) {
    return (fallback as T);
  }
}

export async function fetchProducts(): Promise<Product[]> {
  return safeJson<Product[]>("/products", { next: { revalidate: 60 } } as NextFetchOptions, []);
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${BASE}/products/${id}`, { next: { revalidate: 60 } } as NextFetchOptions);
    if (res.status === 404) return null;
    if (!res.ok) return null;
    return res.json();
  } catch (_e) {
    return null;
  }
}

export async function fetchCategories(): Promise<string[]> {
  return safeJson<string[]>("/products/categories", { next: { revalidate: 3600 } } as NextFetchOptions, []);
}
