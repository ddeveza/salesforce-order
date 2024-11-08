import { getProductsByCartId } from "@/server/getOrders";
import ProductItem from "./product-item";

export type ProductType = {
  name: string;
  value: string;
  id: string;
  addToCart: any;
};

async function ProductList({ id }: { id: string }) {
  const products = await getProductsByCartId(id);

  if (!products?.length) {
    return <div className="flex items-center justify-center">No available products.</div>;
  }

  return (
    <div className="p-2 max-h-96 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  overflow-auto">
      {products.map((product: ProductType) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;
