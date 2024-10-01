import { Customer } from 'src/entity/customer.entity';

export type ClaimEntity = {
  id?: string;
  title: string;
  description: string;
  pointValue: number;
  customerId: string;
  customer: Customer;
};
