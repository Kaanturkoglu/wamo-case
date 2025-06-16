import { useState } from "react";
import AddItem from "../../AddItem";
import ItemsFieldPlain from "../../ItemsFieldPlain";
import type { ItemsFieldProps } from "./ItemsField.types";
import { FormProvider, useForm } from "react-hook-form";
import ItemsFieldWithItems from "../../ItemsFieldWithItems/ItemsFieldWithItems";

const ItemsField = ({ type }: ItemsFieldProps) => {
  const [currentType, setCurrentType] = useState<ItemsFieldProps["type"]>(type);
  const handleTypeChange = (newType: ItemsFieldProps["type"]) => {
    setCurrentType(newType);
  };

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      {currentType === "plain" ? (
        <ItemsFieldPlain
          onClick={() => {
            handleTypeChange("add item");
          }}
        />
      ) : currentType === "add item" ? (
        <AddItem
          onClick={() => {
            handleTypeChange("with items");
          }}
        />
      ) : (
        <ItemsFieldWithItems
          onClick={() => {
            handleTypeChange("add item");
          }}
        />
      )}
    </FormProvider>
  );
};

export default ItemsField;
