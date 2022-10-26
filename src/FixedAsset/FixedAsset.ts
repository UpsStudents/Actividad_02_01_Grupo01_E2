import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum FixedAssetsType {
  EXHAUSTIBLE = 'Exhaustible',
  DEPRECIABLE = 'Depreciable',
  NON_DEPRECIABLE = 'NonDepreciable',
}

@Entity()
export class FixedAsset {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  code: string;
  @Column()
  name: string;
  @Column({ type: 'float' })
  price: number;
  @Column({ nullable: true })
  description?: string;
  @Column({ type: 'float', nullable: true })
  usefulLife?: number;
  @Column({ type: 'float', nullable: true })
  depreciationRate?: number;
  @Column({ nullable: true })
  ingressDate?: Date;
  @Column({ nullable: true })
  manufactureDate?: Date;
  @Column({ type: 'enum', enum: FixedAssetsType, nullable: true })
  FixedAssetsType?: FixedAssetsType;
}
