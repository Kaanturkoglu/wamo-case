import type { Currency } from "../../../../../types/currency";

export type AddItemPriceFieldProps = {
    price: string;
    setPrice: (val: string) => void;
    currency: string;
    setCurrency: (val: Currency) => void;
    disabled?: boolean;

}