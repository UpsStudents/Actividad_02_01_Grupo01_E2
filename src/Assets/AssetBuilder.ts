import { FixedAsset, FixedAssetsType } from 'src/FixedAsset/FixedAsset';
import { FixedAssetBuilder } from 'src/FixedAsset/FixedAssetBuilder';

export class AssetBuilder implements FixedAssetBuilder {
  fixedAsset: FixedAsset;
  /**
   *
   */
  createFixedAsset(
    code: string,
    name: string,
    price: number,
  ): FixedAssetBuilder {
    this.fixedAsset = new FixedAsset();
    this.fixedAsset.code = code;
    this.fixedAsset.name = name;
    this.fixedAsset.price = price;
    return this;
  }
  withDescription(description: string): FixedAssetBuilder {
    this.fixedAsset.description = description;
    return this;
  }
  withUsefulLife(life: number): FixedAssetBuilder {
    this.fixedAsset.usefulLife = life;
    return this;
  }
  withDepreciationRate(rate: number): FixedAssetBuilder {
    this.fixedAsset.depreciationRate = rate;
    return this;
  }
  withIngressDate(date: Date): FixedAssetBuilder {
    this.fixedAsset.ingressDate = date;
    return this;
  }
  withManufactureDate(date: Date): FixedAssetBuilder {
    this.fixedAsset.manufactureDate = date;
    return this;
  }
  withFixedAssetsType(type: FixedAssetsType): FixedAssetBuilder {
    this.fixedAsset.FixedAssetsType = type;
    return this;
  }
}
