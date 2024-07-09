export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Detail untuk produk {params.productId}</h1>;
}
