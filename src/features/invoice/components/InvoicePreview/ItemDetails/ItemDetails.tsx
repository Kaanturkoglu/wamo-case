import Divider from "../../../../../components/common/Divider";
import ItemDetailsHeader from "../ItemDetailsHeader";
import ItemDetailsItem from "../ItemDetailsItem/ItemDetailsItem";
import ItemsSummary from "../ItemsSummary/ItemsSummary";
import type { ItemDetailsProps } from "./ItemDetails.types";

const ItemDetails = ({ items }: ItemDetailsProps) => {
  const safeItems = items || [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "start",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <ItemDetailsHeader />
      <Divider
        orientation="horizontal"
        color="#b4b5b7"
        thickness={1.5}
        length="100%"
        margin="10px 0"
        opacity={0.5}
      />
      {safeItems.length > 0 ? (
        safeItems.map((item, index) => (
          <ItemDetailsItem
            key={`item-${index}`}
            description={item.title}
            quantity={item.quantity}
            unitPrice={item.price}
            vatRate={item.vatRate}
            currency={item.currency}
          />
        ))
      ) : (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            color: "#666",
            fontStyle: "italic",
          }}
        >
          No items added yet
        </div>
      )}
      <Divider
        orientation="horizontal"
        color="#b4b5b7"
        thickness={1.5}
        length="100%"
        margin="10px 0"
        opacity={0.5}
      />
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <ItemsSummary />
      </div>
    </div>
  );
};

export default ItemDetails;
