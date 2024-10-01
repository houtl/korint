import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Claim {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  pointValue: number;

  @ManyToOne(() => Customer, (customer) => customer.claims, {
    onDelete: 'CASCADE',
  })
  customer: Customer;

  @Column({ name: 'customerId', type: 'varchar' })
  customerId: string;
}
