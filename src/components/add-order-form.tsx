"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

import { createCart } from "@/server/getOrders";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "./custom-form-field";
import { DialogContent, DialogDescription, DialogHeader } from "./ui/dialog";

export const orderSchema = z.object({
  name: z.string().min(1, "Required"),
});

const AddOrderForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof orderSchema>) => {
    console.log({ values });
    ("use server");
    const data = await createCart(values.name);
    /*if (data?.message) {
      toast({
        title: data.error ? "Error" : "Success",
        description: data.message,
        variant: data.error ? "destructive" : "default",
      });
    } */
  };
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add New Order</DialogTitle>
        <DialogDescription>Please enter the name for the new Order.</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <CustomFormField
            name="name"
            label="Order Name"
            control={form.control}
          />

          <div className="self-center">
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </DialogContent>
  );
};

export default AddOrderForm;
