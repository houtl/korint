import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerWithPoints } from '../types/customer';
import { Customer } from '../entity/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async createCustomer(email: string, name: string): Promise<Customer> {
    const customer = this.customerRepository.create({ email, name });
    return this.customerRepository.save(customer);
  }

  async getCustomer(id: string): Promise<CustomerWithPoints> {
    const customer = await this.customerRepository.findOne({
      where: { id },
      relations: ['claims'],
    });

    if (customer) {
      const totalPoints = customer.claims.reduce(
        (sum, claim) => sum + claim.pointValue,
        0,
      );
      return { ...customer, totalPoints };
    }

    return null;
  }
}
