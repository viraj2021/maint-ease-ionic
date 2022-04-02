import { BaseEntity } from 'src/model/base-entity';
import { Image } from './image.model';

export const enum Priority {
  'CRITICAL',
  'HIGH',
  'MEDIUM',
  'LOW',
  'NONE',
}

export class Request implements BaseEntity {
  constructor(
    public id?: string,
    public title?: string,
    public requestId?: string,
    public description?: string,
    public priority?: Priority,
    public isActive?: boolean,
    public additionalInfo?: string,
    public approverRemark?: string,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public wonumber?: string,
    public assetId?: string,
    public assetName?: string,
    public locationId?: string,
    public locationAddress?: string,
    public images?: Image[],
    public tenantId?: number,
    public assigneeId?: string,
    public assigneeName?: string,
    public teamName?: string,
    public teamId?: string,
    public fieldMetaData?: any
  ) {
    this.isActive = false;
  }
}
