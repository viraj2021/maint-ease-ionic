import { BaseEntity } from 'src/model/base-entity';

export class Note implements BaseEntity {
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public isSystemGenerated?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public workorderId?: number,
    public assetId?: number,
    public partId?: number,
    public readingId?: number
  ) {
    this.isSystemGenerated = false;
  }
}
