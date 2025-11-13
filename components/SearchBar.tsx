"use client";

import React from "react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center bg-white rounded-md shadow px-2 py-1">
      <span className="sr-only">Search</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="outline-none px-2 py-1 w-64 text-sm"
        aria-label="Search products"
      />
    </label>
  );
}
