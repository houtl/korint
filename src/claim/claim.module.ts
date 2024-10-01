import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Claim } from '../entity/claim.entity';
import { ClaimService } from './claim.service';
import { ClaimController } from './claim.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Claim])],
  providers: [ClaimService],
  controllers: [ClaimController],
  exports: [TypeOrmModule],
})
export class ClaimModule {}
