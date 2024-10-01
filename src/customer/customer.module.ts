// customer.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from '../entity/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerService],
  controllers: [CustomerController],
  exports: [TypeOrmModule],
})
export class CustomerModule {}
