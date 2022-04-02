import { BaseEntity } from 'src/model/base-entity';

export class AssetDowntime implements BaseEntity {
  constructor(
    public id?: string,
    public startDate?: any,
    public endDate?: any,
    public isPlanned?: boolean,
    public description?: string,
    public isCurrent?: boolean,
    public activationRemark?: string,
    public refWoOrTask?: string,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public assetId?: number
  ) {
    this.isPlanned = false;
    this.isCurrent = false;
  }
}
