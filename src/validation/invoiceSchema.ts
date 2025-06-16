import { z } from "zod";

export const invoiceItemSchema = z.object({
  title: z
    .string()
    .min(1, "Description is required")
    .max(30, "Description must not exceed 30 characters")
    .trim(),
  quantity: z
    .number()
    .positive("Quantity must be positive")
    .int("Quantity must be a whole number")
    .min(1, "Quantity must be at least 1"),
  price: z
    .number()
    .nonnegative("Price cannot be negative")
    .min(0.01, "Price must be at least 0.01"),
  vatRate: z
    .number()
    .min(0, "VAT rate must be at least 0%")
    .max(100, "VAT rate must not exceed 100%"),
  currency: z.string().min(1, "Currency is required"),
});

export const invoiceFormSchema = z.object({
  issueDate: z
    .string()
    .min(1, "Issue date is required")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, "Issue date cannot be in the past"),
  dueDate: z
    .string()
    .min(1, "Due date is required"),
  items: z
    .array(invoiceItemSchema)
    .min(1, "At least one item is required"),
}).refine((data) => {
  const issueDate = new Date(data.issueDate);
  const dueDate = new Date(data.dueDate);
  return dueDate >= issueDate;
}, {
  message: "Due date must be after or equal to issue date",
  path: ["dueDate"],
});

export type InvoiceFormData = z.infer<typeof invoiceFormSchema>;
export type InvoiceItemData = z.infer<typeof invoiceItemSchema>;