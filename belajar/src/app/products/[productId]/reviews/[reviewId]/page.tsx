"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("error Loading Review!");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Detail Review {params.reviewId} untuk produk {params.productId}
    </h1>
  );
}
