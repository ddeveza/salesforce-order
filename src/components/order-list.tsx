import OrderItem from "./order-item";

export type OrderType = {
  orderNumber: string;
  name: string;
  startDate: string;
  id: string;
};

const OrderList = ({ orders }: { orders: OrderType[] }) => {
  if (!orders?.length) {
    return <div>No Order found...</div>;
  }

  return (
    <div className="p-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {orders.map((order: OrderType) => (
        <OrderItem
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
};

export default OrderList;
