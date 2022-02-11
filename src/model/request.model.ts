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
    public id?: number,
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
    public assetId?: number,
    public locationId?: number,
    public images?: Image[],
    public tenantId?: number
  ) {
    this.isActive = false;
  }
}
