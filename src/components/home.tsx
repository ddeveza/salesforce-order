import { getOrdersConsumerType } from "@/server/getOrders";
import AddOrder from "./add-order";
import OrderList from "./order-list";

export default async function HomePage() {
  const orders = await getOrdersConsumerType();

  return (
    <>
      <AddOrder />
      <OrderList orders={orders} />;
    </>
  );
}
