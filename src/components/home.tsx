import { getOrdersConsumerType } from "@/server/getOrders";
import OrderList from "./order-list";

export default async function HomePage() {
  const orders = await getOrdersConsumerType();

  return (
    <>
      <OrderList orders={orders} />;
    </>
  );
}
