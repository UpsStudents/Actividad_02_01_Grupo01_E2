import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    code: string;

    @Column({ nullable: true })
    registrationDate?: Date;
    
    @Column({ type: 'float', nullable: true })
    temperature: number;

    @Column({ nullable: true })
    description: string;
}