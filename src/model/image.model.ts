import { BaseEntity } from 'src/model/base-entity';

export class Image implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public extension?: string,
    public imageContentType?: string,
    public image?: any,
    public path?: string,
    public isDisplay?: boolean,
    public savedName?: string,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public workorderId?: number,
    public requestId?: number,
    public assetId?: number,
    public readingId?: number,
    public partId?: number
  ) {
    this.isDisplay = false;
  }
}
