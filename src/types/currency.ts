import europeanUnionFlag from '../assets/flags/euroIcon.png';
import turkishFlag from '../assets/flags/turkeyIcon.png';
import usFlag from '../assets/flags/usaIcon.png';
import ukFlag from '../assets/flags/ukIcon.png';


export type Currency = 'USD' | 'EUR' | 'GBP' | 'TRY';

export const currencySymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  TRY: '₺',
};

export const currencyIcons: Record<Currency, string> = {
  USD: usFlag,
  EUR: europeanUnionFlag,
  GBP: ukFlag,
  TRY: turkishFlag,
};