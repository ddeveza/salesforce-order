import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const CartSummary = ({ cartSummary }: { cartSummary: any }) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">
          <div className="flex items-center justify-between">
            <div>Cart Summary</div>
            <div>
              <Button
                asChild
                variant="ghost"
              >
                <Link href="/">
                  <ArrowLeft />
                  Back
                </Link>
              </Button>
            </div>
          </div>
        </CardTitle>
        <CardDescription>Total amount of charges.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div>
            Total One Time Charges: <span className="font-bold underline">${cartSummary.oneTimeCharges}</span>
          </div>
          <div>
            Total Recurring Charges: <span className="font-bold underline">${cartSummary.recurringTotal}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
