import CartDetails from "@/components/cart-details";
import CartSummary from "@/components/cart-summary";
import { Button } from "@/components/ui/button";
import { getCartItems, getCartSummary } from "@/server/api";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
    return (
      <div className="flex flex-col items-center   mx-auto h-screen">
        <div>No available item/s in the cart.</div>
        <div>
          <Button
            asChild
            variant="ghost"
          >
            <Link href="/">
              <ArrowLeft />
              Back to main page
            </Link>
          </Button>
        </div>
      </div>
    );
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
