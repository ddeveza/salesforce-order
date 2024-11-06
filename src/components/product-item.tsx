import { Card, CardHeader, CardTitle } from "./ui/card";

const ProductItem = ({ product }: { product: any }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          <div className="w-full flex justify-between">
            <div>{product.name}</div>
            <div>{product.UnitPrice.value}</div>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default ProductItem;
