import { BaseEntity } from 'src/model/base-entity';

export const enum FileCategory {
  'WARRANTY',
  'RECEIPT',
  'PURCHASEORDER',
  'MANUAL',
  'LAYOUT',
  'CHECKLIST',
  'SIGNATURE',
  'OTHER',
}

export class File implements BaseEntity {
  constructor(
    public id?: string,
    public type?: string,
    public name?: string,
    public category?: FileCategory,
    public extension?: string,
    public description?: string,
    public path?: string,
    public fileContentType?: string,
    public file?: any,
    public savedName?: string,
    public isNew?: boolean,
    public isDeleted?: boolean,
    public size?: number,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public workorderId?: number,
    public restockEventId?: number,
    public assetId?: number,
    public partId?: number
  ) {
    this.isNew = false;
    this.isDeleted = false;
  }
}
