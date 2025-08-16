"use client";

import { Suspense } from "react";
import ComparisonResults from "./ComparisonResults";

export default function ResultsContent() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ComparisonResults />  
    </Suspense>
  );
}
