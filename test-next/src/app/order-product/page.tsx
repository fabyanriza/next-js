"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Your ordered has been sent!!");
    router.push("/");
  };
  return (
    <div>
      <h1>Order Products</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
