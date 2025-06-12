import { useForm } from 'react-hook-form';

export const useInvoiceForm = () => {
  const form = useForm({
    defaultValues: {
      issueDate: new Date(),
      dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), 
      items: [],
      vatType: 'standard',
      customVat: 21
    }
  });

  const watchedValues = form.watch();
  return { form, watchedValues };
};