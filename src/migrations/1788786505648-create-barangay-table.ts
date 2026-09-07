import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBarangayTable1788786505648 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
                await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
                await queryRunner.createTable(new Table({
                    name: "barangays",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: "uuid",
                            default: "uuid_generate_v4()"
                        },
                        {
                            name: "brgy",
                            type: "varchar",
                            length: "255",
                            isNullable: false
                        },
                        {
                            name: "municipality",
                            type: "varchar",
                            length: "255",
                            isNullable: false
                        },
                        {
                            name: "province",
                            type: "varchar",
                            length: "255",
                            isNullable: false
                        },

                        {
                            name: "is_active",
                            type: "boolean",
                            default: true
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "CURRENT_TIMESTAMP"
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "CURRENT_TIMESTAMP",
                            onUpdate: "CURRENT_TIMESTAMP"
                        },
                        {
                            name: "deleted_at",
                            type: "timestamp",
                            isNullable: true
                        }
                    ]
                }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("barangays");
    }

}
