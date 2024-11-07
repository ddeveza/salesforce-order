import Link from "next/link";
import { OrderType } from "./order-list";
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
          <Button
            variant="outline"
            className="font-semibold"
            asChild
          >
            <Link href={`/products/${order.id}`}>View List of Product</Link>
          </Button>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default OrderItem;
