import { Modal } from "@/components/modal";
import ProductItem from "@/components/product-item";
import { ProductType } from "@/components/product-list";
import { getProductsByCartId } from "@/server/api";

type ProductsType = {
  params: Promise<{ cartId: string }>; // Ensure params is a Promise
};

const ProductsPage = async ({ params }: ProductsType) => {
  const { cartId } = await params;
  const products = await getProductsByCartId(cartId);

  if (!products?.length) {
    return (
      <Modal>
        <div className="flex items-center justify-center">No available products.</div>{" "}
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="p-2 max-h-96 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  overflow-auto">
        {products.map((product: ProductType) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Modal>
  );
};

export default ProductsPage;
