import CartDetails from "@/components/cart-details";
import CartSummary from "@/components/cart-summary";
import { getCartItems, getCartSummary } from "@/server/api";

type CartPageType = {
  params: Promise<{
    cartId: string;
  }>;
};

export default async function CartSummaryPage({ params }: CartPageType) {
  const { cartId } = await params;
  const cartSummary = await getCartSummary(cartId);
  const cartItems = await getCartItems(cartId);

  if (!cartItems?.length) {
    return <div className="flex items-center justify-center">No available items in the cart.</div>;
  }

  return (
    <div className="container flex flex-col gap-y-3 mt-5">
      <CartSummary cartSummary={cartSummary} />
      <CartDetails
        cartItems={cartItems}
        totalOneTimeCharges={cartSummary?.oneTimeCharges}
        totalRecurringCharges={cartSummary?.recurringTotal}
      />
    </div>
  );
}
