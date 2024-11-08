import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const CartDetails = ({ cartItems, totalOneTimeCharges, totalRecurringCharges }: { cartItems: any; totalOneTimeCharges: number; totalRecurringCharges: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Cart Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A List of items in the cart.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>One Time Charges</TableHead>
              <TableHead>Recurring Charge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartItems.map((cart: any) => (
              <TableRow key={cart.id}>
                <TableCell>{cart.name}</TableCell>
                <TableCell>{cart.quantity}</TableCell>
                <TableCell>${cart.oneTimeCharges}</TableCell>
                <TableCell>${cart.recurringTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow className="underline">
              <TableCell
                colSpan={2}
                className="font-extrabold text-lg"
              >
                Total
              </TableCell>
              <TableCell className="font-extrabold">${totalOneTimeCharges}</TableCell>
              <TableCell className="font-extrabold">${totalRecurringCharges}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CartDetails;

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
