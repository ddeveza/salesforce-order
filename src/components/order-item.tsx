import { DialogTrigger } from "@radix-ui/react-dialog";

import ProductModal from "./product-modal";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog } from "./ui/dialog";

const OrderItem = ({ order }: { order: any }) => {
  return (
    <Dialog>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Order No: {order?.OrderNumber}</CardTitle>
          <CardDescription>{order?.Name ?? "No Title"}</CardDescription>
          <CardDescription>Order Start Date: {order?.EffectiveDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <DialogTrigger asChild>
            <Button variant="outline">View List of Product</Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <ProductModal id={order.Id} />
    </Dialog>
  );
};

export default OrderItem;
