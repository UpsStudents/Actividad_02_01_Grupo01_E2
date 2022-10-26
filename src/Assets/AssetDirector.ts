import { FixedAssetsType } from 'src/FixedAsset/FixedAsset';
import { FixedAssetBuilder } from 'src/FixedAsset/FixedAssetBuilder';

export class AssetDirector {
  private builder: FixedAssetBuilder;
  setBuilder(builder: FixedAssetBuilder) {
    this.builder = builder;
  }
  buildComputer() {
    this.builder.createFixedAsset('C001', 'Computer', 1000);
    this.builder.withDescription('This is a computer');
    this.builder.withUsefulLife(5);
    this.builder.withDepreciationRate(0.2);
    this.builder.withIngressDate(new Date());
    this.builder.withFixedAssetsType(FixedAssetsType.EXHAUSTIBLE);
  }
  buildTable() {
    this.builder.createFixedAsset('T001', 'Table', 100);
    this.builder.withDescription('This is a table');
    this.builder.withUsefulLife(10);
    this.builder.withDepreciationRate(0.1);
    this.builder.withFixedAssetsType(FixedAssetsType.DEPRECIABLE);
  }
  buildChair() {
    this.builder.createFixedAsset('C001', 'Chair', 50);
    this.builder.withDescription('This is a chair');
    this.builder.withUsefulLife(10);
    this.builder.withDepreciationRate(0.1);
    this.builder.withFixedAssetsType(FixedAssetsType.NON_DEPRECIABLE);
  }
  getProduct() {
    return this.builder.fixedAsset;
  }
}
