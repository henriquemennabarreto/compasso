import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCities1605596696862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'cities',
          columns: [
            {
              name: 'id',
              type: 'int4',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'state',
              type: 'varchar',
            },
            {
              name: 'created_at',
              type: 'timestamptz',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamptz',
              isNullable: true,
            },
            {
              name: 'deleted_at',
              type: 'timestamptz',
              isNullable: true,
            },
          ],
        }),
      );
      await queryRunner.query(`CREATE OR REPLACE FUNCTION trigger_set_timestamp()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;`);
      await queryRunner.query(`CREATE TRIGGER set_timestamp
      BEFORE UPDATE ON cities
      FOR EACH ROW
      EXECUTE PROCEDURE trigger_set_timestamp();`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('cities');
    }

}
