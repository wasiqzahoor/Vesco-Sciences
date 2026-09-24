"use client";

import { useParams } from "next/navigation";
import ProductDetailShell from "@/components/ProductDetailShell";

export default function ProductDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const productId = params.productId as string;
  return <ProductDetailShell category={category} productId={productId} />;
}
