import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from "typeorm";

@Entity("barangays")
export class Barangay {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({ length: 100 })
    brgy!: string;

    @Column({ length: 100 })
    municipality!: string;

    @Column({ length: 100 })
    province!: string;

    @Column({ default: true })
    is_active!: boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @DeleteDateColumn()
    deleted_at!: Date | null;
}