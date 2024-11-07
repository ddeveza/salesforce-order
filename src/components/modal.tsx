"use client";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader } from "./ui/dialog";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog
      defaultOpen={true}
      open={true}
      onOpenChange={handleOpenChange}
    >
      <DialogContent className="max-w-max">
        <DialogHeader>
          <DialogTitle className="text-2xl">Product List</DialogTitle>
          <DialogDescription>List of all products.</DialogDescription>
        </DialogHeader>
        {children}
        <div className="flex gap-2">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
