import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({ length: 100 })
    name!: string;

    @Column({ unique: true, length: 100 })
    email!: string;

    @Column({ length: 255, select: false })
    password!: string;

    @Column({ length: 100 })
    role!: string;

    @Column()
    barangay_id!: string;

    @Column({ default: true })
    is_active!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @DeleteDateColumn()
    deleted_at!: Date | null;
}