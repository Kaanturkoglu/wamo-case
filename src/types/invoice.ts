export interface InvoiceItem {
  title: string;
  quantity: number;
  price: number;
  vatRate: number; 
  currency: string;
}

export interface InvoiceFormValues {
  issueDate: string;           
  dueDate: string;        
  items: InvoiceItem[];
  totalInclVAT: number;
}