import { BaseEntity } from 'src/model/base-entity';

export const enum BookmarkColor {
  'YELLOW',
  'RED',
  'GREEN',
  'BLUE',
  'GRAY',
}

export class Bookmark implements BaseEntity {
  constructor(
    public id?: string,
    public color?: BookmarkColor,
    public createDate?: any,
    public tenantId?: number,
    public assetAssetId?: string,
    public assetId?: number,
    public partPartId?: string,
    public partId?: number,
    public workorderWonumber?: string,
    public workorderId?: number,
    public employeeId?: number,
    public questionId?: number
  ) {}
}
