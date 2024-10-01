import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from '../entity/claim.entity';
import { ClaimEntity } from '../types/claim';

@Injectable()
export class ClaimService {
    constructor(
        @InjectRepository(Claim)
        private claimRepository: Repository<Claim>,
    ) { }

    async createClaims(claims: ClaimEntity[]): Promise<Claim[]> {
        const claim = this.claimRepository.create(claims);
        return this.claimRepository.save(claim);
    }

    async getClaimById(id: string): Promise<Claim> {
        const claim = await this.claimRepository.findOne({
            where: { id },
        });

        if (claim) {
            return claim;
        }

        return null;
    }
    async getClaimsByCustomerId(customerId: string): Promise<Claim[]> {
        const claims = await this.claimRepository.find({
            where: { customerId },
        });

        if (claims) {
            return claims;
        }

        return null;
    }
}
