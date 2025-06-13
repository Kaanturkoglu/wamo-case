export interface InvoiceItem {
  description: string;
  quantity: number;
  price: number;
  vat: number; 
}

export interface InvoiceFormValues {
  issueDate: string;           
  dueDate: string;        
  //TODO     
}