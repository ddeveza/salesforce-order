"use client";

import { useToast } from "@/hooks/use-toast";
import { addToCart } from "@/server/api";
import { useTransition } from "react";
import { ProductType } from "./product-list";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

const ProductItem = ({ product }: { product: ProductType }) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  async function handleAddToCart() {
    startTransition(async () => {
      const data = await addToCart(product.addToCart);

      toast({
        title: data ? "Success" : "Error",
        description: data ? "Added To Cart Successfully!" : "Error on add to cart. Please contact",
        variant: data ? "default" : "destructive",
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          <div className="grid grid-cols-1 place-items-start gap-y-3">
            <div>Name: {product.name}</div>
            <div>Price: {product.value}</div>
            <Button
              variant="secondary"
              onClick={handleAddToCart}
              disabled={isPending}
            >
              {isPending ? "Adding..." : "Add to Cart"}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ProductItem;
