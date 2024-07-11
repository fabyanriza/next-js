import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
}
