import { FixedAsset, FixedAssetsType } from './FixedAsset';

export interface FixedAssetBuilder {
  fixedAsset: FixedAsset;
  createFixedAsset(
    code: string,
    name: string,
    price: number,
  ): FixedAssetBuilder;
  withDescription(description: string): FixedAssetBuilder;
  withUsefulLife(life: number): FixedAssetBuilder;
  withDepreciationRate(rate: number): FixedAssetBuilder;
  withIngressDate(date: Date): FixedAssetBuilder;
  withManufactureDate(date: Date): FixedAssetBuilder;
  withFixedAssetsType(type: FixedAssetsType): FixedAssetBuilder;
}
