import { useTheme } from "../../../../../hooks/useTheme";
import ItemInformation from "../ItemInformation/ItemInformation";
import FormFieldHeader from "../FormFieldHeader";
import AddMoreItems from "../AddMoreItems/AddMoreItems";
import type { ItemFieldWithItemsProps } from "./ItemsFieldWithItems.types";

const ItemsFieldWithItems = ({ onClick }: ItemFieldWithItemsProps) => {
  const { themeData } = useTheme();

  return (
    
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
      <FormFieldHeader title="Items" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: themeData.primary,
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <ItemInformation />
        <AddMoreItems onClick={onClick} />
      </div>
    </div>
  );
};

export default ItemsFieldWithItems;
