export interface Rental {
  id: string;
  name: string;
  address: string;
  rentalIncome: string;
  financed: boolean;
};

export const emptyRental = {
  id: '',
  name: '',
  address: '',
  rentalIncome: '',
  financed: false
};