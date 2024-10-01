import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Claim } from './claim.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @OneToMany(() => Claim, (claim) => claim.customer, { cascade: true })
  claims: Claim[];
}
