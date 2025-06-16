import { fonts } from "../../../../../constants/fonts";
import { useTheme } from "../../../../../hooks/useTheme";
import boxIconLightTheme from "../../../../../assets/boxIconLightTheme.png";
import boxIconDarkTheme from "../../../../../assets/boxIconDarkTheme.png";
import type { AddItemProps } from "./AddItem.types";
import AddItemPriceField from "../AddItemPriceField/AddItemPriceField";
import FormFieldHeader from "../FormFieldHeader/";
import QuantityAndTitleField from "../QuantityAndTitleField/QuantityAndTitleField";
import ApplyButton from "../../../../../components/common/ApplyButton/ApplyButton";
import VatRateSelector from "../VatRateSelector/VatRateSelector";
import { useState } from "react";
import { type Currency } from "../../../../../types/currency";
import type { InvoiceItem } from "../../../../../types/invoice";
import { useInvoiceForm } from "../../../../../context/InvoiceFormContext";

const AddItem = ({ onClick }: AddItemProps) => {
  const { theme, themeData } = useTheme();
  const { form, formData } = useInvoiceForm();

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [vatRate, setVatRate] = useState("");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

  const validateItem = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = "Description is required";
    } else if (title.length > 30) {
      newErrors.title = "Description must not exceed 30 characters";
    }

    const quantityNum = parseInt(quantity);
    if (!quantity) {
      newErrors.quantity = "Quantity is required";
    } else if (isNaN(quantityNum) || quantityNum <= 0) {
      newErrors.quantity = "Quantity must be a positive number";
    }

    const priceNum = parseFloat(price);
    if (!price) {
      newErrors.price = "Price is required";
    } else if (isNaN(priceNum) || priceNum < 0) {
      newErrors.price = "Price cannot be negative";
    }

    const vatNum = parseFloat(vatRate);
    if (vatRate && (isNaN(vatNum) || vatNum < 0 || vatNum > 100)) {
      newErrors.vatRate = "VAT rate must be between 0-100%";
    }

    setLocalErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = () => {
    if (!validateItem()) {
      return;
    }

    const newItem: InvoiceItem = {
      title: title.trim(),
      quantity: parseInt(quantity),
      price: parseFloat(price),
      vatRate: parseFloat(vatRate) || 0,
      currency: currency,
    };

    const currentItems = formData.items || [];
    const updatedItems = [...currentItems, newItem];

    form.setValue("items", updatedItems, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });

    setTitle("");
    setQuantity("");
    setPrice("");
    setVatRate("");
    setCurrency("EUR");
    setLocalErrors({});

    if (typeof onClick === "function") {
      onClick();
    }
  };

  const isFormValid =
    title.trim() && quantity && price && Object.keys(localErrors).length === 0;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <FormFieldHeader title="Items" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          backgroundColor: themeData.primary,
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: themeData.primary,
            borderRadius: "10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontFamily: fonts.body,
              fontWeight: fonts.boldWeight,
              fontSize: fonts.large,
              color: themeData.text,
              display: "flex",
              height: "100%",
              alignItems: "center",
            }}
          >
            Add Item
          </div>
          <div
            style={{
              backgroundColor: themeData.miniBackground,
              borderRadius: "50px",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={theme === "light" ? boxIconLightTheme : boxIconDarkTheme}
              alt="Add Item"
              style={{
                height: "26px",
                width: "26px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <AddItemPriceField
          price={price}
          setPrice={setPrice}
          currency={currency}
          setCurrency={setCurrency}
        />
        <QuantityAndTitleField
          title={title}
          setTitle={setTitle}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <VatRateSelector vatRate={vatRate} setVatRate={setVatRate} />
        <ApplyButton
          text="Add Item"
          onClick={handleAdd}
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default AddItem;
