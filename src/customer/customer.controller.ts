import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() body: { email: string; name: string }) {
    return this.customerService.createCustomer(body.email, body.name);
  }

  @Get(':id')
  getCustomer(@Param('id') id: string) {
    return this.customerService.getCustomer(id);
  }
}
