import type { InvoiceItem, InvoiceFormValues } from "../types/invoice";
import type { Currency } from "../types/currency";
import { validateFormData } from "../context/InvoiceFormContext/utils";

export const createNewItem = (
  title: string,
  quantity: string,
  price: string,
  vatRate: string,
  currency: Currency
): InvoiceItem => {
  return {
    title: title.trim(),
    quantity: parseInt(quantity) || 0,
    price: parseFloat(price) || 0,
    vatRate: parseFloat(vatRate) || 0,
    currency: currency,
  };
};

export const validateNewItem = (
  newItem: InvoiceItem,
  formData: InvoiceFormValues
) => {
  const testData = {
    ...formData,
    items: [...(formData.items || []), newItem],
  };
  
  const errors = validateFormData(testData);
  const itemIndex = (formData.items || []).length;
  
  return {
    titleError: errors[`items.${itemIndex}.title`],
    quantityError: errors[`items.${itemIndex}.quantity`],
    priceError: errors[`items.${itemIndex}.price`],
    vatRateError: errors[`items.${itemIndex}.vatRate`],
    currencyError: errors[`items.${itemIndex}.currency`],
  };
};

export const checkRequiredFields = (title: string, quantity: string, price: string) => {
  const errors: any = {};
  
  if (!title.trim()) errors.titleError = "Description is required";
  if (!quantity) errors.quantityError = "Quantity is required";
  if (!price) errors.priceError = "Price is required";
  
  return errors;
};