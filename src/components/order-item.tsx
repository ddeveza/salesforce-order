import { DialogTrigger } from "@radix-ui/react-dialog";

import { OrderType } from "./order-list";
import ProductModal from "./product-modal";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog } from "./ui/dialog";

const OrderItem = ({ order }: { order: OrderType }) => {
  return (
    <Dialog>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Order No: {order.orderNumber}</CardTitle>
          <CardDescription>{order.name ?? "No Title"}</CardDescription>
          <CardDescription>Order Start Date: {order?.startDate}</CardDescription>
        </CardHeader>
        <CardContent>
          <DialogTrigger asChild>
            <Button variant="outline">View List of Product</Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <ProductModal id={order.id} />
    </Dialog>
  );
};

export default OrderItem;
