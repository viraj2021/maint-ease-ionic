import { BaseEntity } from 'src/model/base-entity';
import { Bookmark } from './bookmark.model';

export class Faq implements BaseEntity {
  constructor(
    public id?: number,
    public problem?: string,
    public solution?: string,
    public additionalInfo?: string,
    public upvotes?: number,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public bookmarks?: Bookmark[],
    public tenantId?: number,
    public assetAssetId?: string,
    public assetId?: number,
    public partPartId?: string,
    public partId?: number,
    public locationAddress?: string,
    public locationId?: number
  ) {}
}
