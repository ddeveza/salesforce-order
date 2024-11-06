import { PlusIcon } from "lucide-react";
import AddOrderForm from "./add-order-form";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

const AddOrder = () => {
  return (
    <div className="container flex items-center justify-center my-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon /> Add Order
          </Button>
        </DialogTrigger>
        <AddOrderForm />
      </Dialog>
    </div>
  );
};

export default AddOrder;
