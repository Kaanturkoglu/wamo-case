import { useState } from "react";
import AddItem from "../../AddItem";
import ItemsFieldPlain from "../../ItemsFieldPlain";
import type { ItemsFieldProps } from "./ItemsField.types";

const ItemsField = ({ type }: ItemsFieldProps) => {
  const [currentType, setCurrentType] = useState<ItemsFieldProps["type"]>(type);
  const handleTypeChange = (newType: ItemsFieldProps["type"]) => {
    setCurrentType(newType);
  };

  return currentType === "plain" ? (
    <ItemsFieldPlain
      onClick={() => {
        handleTypeChange("add item");
      }}
    />
  ) : currentType === "add item" ? (
    <AddItem
      onClick={() => {
        handleTypeChange("plain");
      }}
    />
  ) : (
    <AddItem
      onClick={() => {
        handleTypeChange("plain");
      }}
    />
  );
};

export default ItemsField;
