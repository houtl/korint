import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1727791383346 implements MigrationInterface {
    name = 'Init1727791383346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "claim" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "pointValue" integer NOT NULL, "customerId" uuid NOT NULL, CONSTRAINT "PK_466b305cc2e591047fa1ce58f81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "claim" ADD CONSTRAINT "FK_a18070374cfe7e2bc06b9518c11" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "claim" DROP CONSTRAINT "FK_a18070374cfe7e2bc06b9518c11"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "claim"`);
    }

}
