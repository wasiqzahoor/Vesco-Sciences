"use client";

import { useParams } from "next/navigation";
import ProductDetailShell from "@/components/ProductDetailShell";
import SEOHead from "@/components/SEOHead";

export default function ProductDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const productId = params.productId as string;
  return (
    <>
      <SEOHead
        title={`${productId} — Vesco Science`}
        description="Vesco Science product detail page for regenerative biologics."
        keywords={`${productId}, ${category}, Vesco Science, regenerative biotechnology`}
        canonical={`https://www.vescoscience.com/products/${category}/${productId}`}
      />
      <ProductDetailShell category={category} productId={productId} />
    </>
  );
}
