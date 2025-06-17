import type { InvoiceFormValues } from "../../types/invoice";

export const getTodayString = (): string => {
  return new Date().toISOString().slice(0, 10);
};

export const getDefaultFormValues = (): InvoiceFormValues => {
  const today = getTodayString();
  return {
    issueDate: today,
    dueDate: today,
    items: [],
    totalInclVAT: 0,
  };
};

export const validateFormData = (data: Partial<InvoiceFormValues>): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!data.items || data.items.length === 0) {
    errors.items = "At least one item is required";
  }
  
  if (data.items) {
    data.items.forEach((item, index) => {
      const firstCurrency = data.items?.[0]?.currency;

      if (item.title && item.title.length > 30) {
        errors[`items.${index}.title`] = "Description must not exceed 30 characters";
      }
      if (item.quantity !== undefined && item.quantity <= 0) {
        errors[`items.${index}.quantity`] = "Quantity must be positive";
      }
      if (item.price !== undefined && item.price < 0) {
        errors[`items.${index}.price`] = "Price cannot be negative";
      }
      if (item.vatRate !== undefined && (item.vatRate < 0 || item.vatRate > 100)) {
        errors[`items.${index}.vatRate`] = "VAT rate must be between 0-100%";
      }
      if (item.currency && firstCurrency && item.currency !== firstCurrency) {
        errors[`items.${index}.currency`] = `Currency must match the first item (${firstCurrency})`;
      }

    });
  }

  if (data.issueDate && data.dueDate) {
    const issueDate = new Date(data.issueDate);
    const dueDate = new Date(data.dueDate);
    
    if (dueDate < issueDate) {
      errors.dueDate = "Due date must be after or equal to issue date";
    }
  }

  return errors;
};