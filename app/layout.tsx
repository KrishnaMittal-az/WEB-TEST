import "./globals.css";
import React from "react";

export const metadata = {
  title: "Fake Store — Products",
  description: "API = https://fakestoreapi.com/products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Fake Store — Products</h1>
            {/* <p className="text-sm text-gray-500">API = https://fakestoreapi.com/products</p> */}
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
