import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { FixedAsset } from './FixedAsset/FixedAsset';

@Injectable()
export class AppService {
  constructor(private manager: EntityManager, private dataSource: DataSource) {}

  findAll() {
    return this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(FixedAsset, 'fixed_asset')
      .getRawMany();
  }

  create(asset: FixedAsset) {
    return this.manager.save(asset);
  }
}
