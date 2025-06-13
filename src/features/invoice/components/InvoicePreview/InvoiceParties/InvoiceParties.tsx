import InvoicePartyItem from "../InvoicePartyItem";

const InvoiceParties = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InvoicePartyItem
        title="From"
        companyName="Acme Inc."
        companyCode="MT71283712"
        addressLine1="Portomaso Business tower STJ 4011"
        addressLine2="St. Julians Malta"
        email="avery.ellis@acme.co"
        phone="+356 77188320"
      ></InvoicePartyItem>
      <InvoicePartyItem
        title="To"
        companyName="Umbrella Co."
        companyCode="MT71283712"
        addressLine1="Portomaso Business tower"
        addressLine2="Malta"
        email="avery.ellis@acme.co"
        phone="+356 77188320"
      ></InvoicePartyItem>
    </div>
  );
};

export default InvoiceParties;
