import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { ClaimEntity } from 'src/types/claim';

@Controller('claims')
export class ClaimController {
  constructor(private readonly claimService: ClaimService) {}

  @Post()
  create(@Body() body: ClaimEntity[]) {
    return this.claimService.createClaims(body);
  }

  @Get(':id')
  getClaimById(@Param('id') id: string) {
    return this.claimService.getClaimById(id);
  }

  @Get('customerId/:id')
  getClaimByCustomerId(@Param('id') id: string) {
    return this.claimService.getClaimsByCustomerId(id);
  }
}
