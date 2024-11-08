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
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              className="font-semibold"
              size="sm"
              asChild
            >
              <Link href={`/products/${order.id}`}>View Products </Link>
            </Button>
            <Button
              variant="link"
              className="font-semibold"
              size="sm"
              asChild
            >
              <Link href={`/cart/${order.id}`}>View Carts</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default OrderItem;
