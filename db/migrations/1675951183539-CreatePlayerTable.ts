import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePlayerTable1675951183539 implements MigrationInterface {
  name = 'CreatePlayerTable1675951183539';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`player\` (\`id\` varchar(36) NOT NULL, \`pseudo\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`player\``);
  }
}
