import { Claim } from 'src/entity/claim.entity';

export type CustomerWithPoints = {
  id: string;
  email: string;
  name: string;
  totalPoints: number;
  claims: Claim[];
};
