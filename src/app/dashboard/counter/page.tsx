import { CartCounter } from "@/app/shopping-cart";
import { useState } from "react";

export const metadata = {
  title: "counter page",
  description: "un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
