"use client";

import React from "react";

type Props = {
  categories: string[];
  value: string | null;
  onChange: (value: string | null) => void;
};

export default function CategoryFilter({ categories, value, onChange }: Props) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value || null)}
      className="bg-white rounded-md shadow px-2 py-1 text-sm"
      aria-label="Filter by category"
    >
      <option value="">All categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
}
