"use client";

import React from "react";

export default function JsonViewer({ data }: { data: any }) {
  return (
    <pre className="text-sm whitespace-pre-wrap">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
