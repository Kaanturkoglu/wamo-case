// src/components/forms/AddItem/AddItem.tsx - Fixed currency logic
import { useState, useEffect } from "react";
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
import { useInvoiceForm } from "../../../../../context/InvoiceFormContext";
import type { Currency } from "../../../../../types/currency";
import {
  createNewItem,
  validateNewItem,
  checkRequiredFields,
} from "../../../../../utils/addItemUtils";
import styles from "../../../../../styles/components/forms/AddItem.module.css";

const AddItem = ({ onClick }: AddItemProps) => {
  const { theme, themeData } = useTheme();
  const { form, formData } = useInvoiceForm();

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [vatRate, setVatRate] = useState("");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [showErrors, setShowErrors] = useState(false);

  // Get the currency from existing items or default to EUR
  const getInitialCurrency = (): Currency => {
    if (formData.items && formData.items.length > 0) {
      return formData.items[0].currency as Currency;
    }
    return "EUR";
  };

  // Update currency when formData changes (when items are added/removed)
  useEffect(() => {
    const currentCurrency = getInitialCurrency();
    setCurrency(currentCurrency);
  }, [formData.items?.length]); // Only update when items count changes

  const handleAdd = () => {
    setShowErrors(true);

    const requiredErrors = checkRequiredFields(title, quantity, price);
    if (Object.keys(requiredErrors).length > 0) {
      return;
    }

    const newItem = createNewItem(title, quantity, price, vatRate, currency);

    const validationErrors = validateNewItem(newItem, formData);
    const hasErrors = Object.values(validationErrors).some((error) => !!error);

    if (hasErrors) {
      return;
    }

    const currentItems = formData.items || [];
    const updatedItems = [...currentItems, newItem];

    form.setValue("items", updatedItems, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });

    // Reset form but keep the same currency for consistency
    setTitle("");
    setQuantity("");
    setPrice("");
    setVatRate("");
    setShowErrors(false);
    // Don't reset currency - it should stay the same for all items

    onClick();
  };

  const getErrors = () => {
    if (!showErrors) return {};

    const requiredErrors = checkRequiredFields(title, quantity, price);

    if (Object.keys(requiredErrors).length > 0) {
      return requiredErrors;
    }

    const newItem = createNewItem(title, quantity, price, vatRate, currency);
    return validateNewItem(newItem, formData);
  };

  const errors = getErrors();

  // Check if currency should be disabled (when there are existing items)
  const isCurrencyDisabled = formData.items && formData.items.length > 0;

  const cssVariables = {
    "--additem-bg-color": themeData.primary,
    "--additem-header-bg": themeData.primary,
    "--additem-icon-bg": themeData.miniBackground,
    "--additem-text-color": themeData.text,
    "--additem-font-family": fonts.body,
    "--additem-font-weight-bold": fonts.boldWeight,
    "--additem-font-size-large": fonts.large,
    "--additem-error-color": "#dc3545",
    "--additem-error-font-size": "12px",
  } as React.CSSProperties;

  return (
    <div className={styles.addItem} style={cssVariables}>
      <FormFieldHeader title="Items" />
      <div className={styles.container}>
        <div className={styles.header} onClick={onClick}>
          <div className={styles.title}>Add Item</div>
          <div className={styles.iconContainer}>
            <img
              src={theme === "light" ? boxIconLightTheme : boxIconDarkTheme}
              alt="Add Item"
              className={styles.icon}
            />
          </div>
        </div>

        <AddItemPriceField
          price={price}
          setPrice={(value) => {
            setPrice(value);
            if (showErrors) setShowErrors(false);
          }}
          currency={currency}
          setCurrency={(value) => {
            setCurrency(value);
            if (showErrors) setShowErrors(false);
          }}
          disabled={isCurrencyDisabled}
        />
        {showErrors && (errors.priceError || errors.currencyError) && (
          <div className={styles.errorContainer}>
            {errors.priceError && (
              <div className={styles.error}>Price: {errors.priceError}</div>
            )}
            {errors.currencyError && (
              <div className={styles.error}>
                Currency: {errors.currencyError}
              </div>
            )}
          </div>
        )}

        <QuantityAndTitleField
          title={title}
          setTitle={(value) => {
            setTitle(value);
            if (showErrors) setShowErrors(false);
          }}
          quantity={quantity}
          setQuantity={(value) => {
            setQuantity(value);
            if (showErrors) setShowErrors(false);
          }}
        />
        {showErrors && (errors.titleError || errors.quantityError) && (
          <div className={styles.errorContainer}>
            {errors.titleError && (
              <div className={styles.error}>Title: {errors.titleError}</div>
            )}
            {errors.quantityError && (
              <div className={styles.error}>
                Quantity: {errors.quantityError}
              </div>
            )}
          </div>
        )}

        <VatRateSelector
          vatRate={vatRate}
          setVatRate={(value) => {
            setVatRate(value);
            if (showErrors) setShowErrors(false);
          }}
        />
        {showErrors && errors.vatRateError && (
          <div className={styles.fieldSection}>
            <div className={styles.error}>VAT Rate: {errors.vatRateError}</div>
          </div>
        )}
        <ApplyButton text="Add Item" onClick={handleAdd} disabled={false} />
      </div>
    </div>
  );
};

export default AddItem;
