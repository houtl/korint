import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { CustomerController } from './customer/customer.controller';
import { ClaimService } from './claim/claim.service';
import { CustomerService } from './customer/customer.service';
import { ClaimController } from './claim/claim.controller';
import { CustomerModule } from './customer/customer.module';
import { ClaimModule } from './claim/claim.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CustomerModule,
    ClaimModule,
  ],
  controllers: [AppController, CustomerController, ClaimController],
  providers: [AppService, CustomerService, ClaimService],
})

export class AppModule { }
