import { ProductType } from "./product-list";
import { Card, CardHeader, CardTitle } from "./ui/card";

const ProductItem = ({ product }: { product: ProductType }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          <div className="w-full flex justify-between">
            <div>{product.name}</div>
            <div>{product.value}</div>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ProductItem;
