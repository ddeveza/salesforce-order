import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const CartSummary = ({ cartSummary }: { cartSummary: any }) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Cart Summary:</CardTitle>
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
