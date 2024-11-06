import OrderItem from "./order-item";

const OrderList = ({ orders }: { orders: any }) => {
  if (!orders.length) {
    return <div>No Order found...</div>;
  }

  return (
    <div className="p-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {orders.map((order: any) => (
        <OrderItem
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
};

export default OrderList;
