"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h2>Review Not Found</h2>
      <p>
        Could not find review {reviewId} for product {productId}
      </p>
    </div>
  );
}
