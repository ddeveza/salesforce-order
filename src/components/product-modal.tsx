import ProductList from "./product-list";
import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

function ProductModal({ id }: { id: string }) {
  return (
    <DialogContent className="max-w-max">
      <DialogHeader>
        <DialogTitle className="text-2xl">Product List</DialogTitle>
        <DialogDescription>List of all products.</DialogDescription>
      </DialogHeader>

      <ProductList id={id} />

      <div className="flex gap-2">
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}

export default ProductModal;
