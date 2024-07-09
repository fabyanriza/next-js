export default function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Detail Review {params.reviewId} untuk produk {params.productId}
    </h1>
  );
}
