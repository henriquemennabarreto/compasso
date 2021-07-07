import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCustomer1607635190265
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'customers',
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
          },
          {
            name: 'gender',
            type: 'varchar',
          },
          {
            name: 'birth',
            type: 'timestamptz',
          },
          {
            name: 'age',
            type: 'varchar',
          },
          {
            name: 'city_id',
            type: 'int4',
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
        foreignKeys: [
          {
            name: 'CustomerCity',
            referencedTableName: 'cities',
            referencedColumnNames: ['id'],
            columnNames: ['city_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
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
    BEFORE UPDATE ON customers
    FOR EACH ROW
    EXECUTE PROCEDURE trigger_set_timestamp();`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}
