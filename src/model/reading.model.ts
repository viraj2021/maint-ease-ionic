import { BaseEntity } from 'src/model/base-entity';
import { Note } from './note.model';
import { Image } from './image.model';

export const enum ScheduleType {
  'WEEKLY',
  'BIWEEKLY',
  'MONTHLY',
  'QUARTERLY',
  'SEMIANNUALLY',
  'ANNUALLY',
}

export class Reading implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public readingId?: string,
    public type?: ScheduleType,
    public unit?: string,
    public frequency?: number,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public notes?: Note[],
    public images?: Image[],
    public tenantId?: number,
    public locationId?: number,
    public categoryName?: string,
    public categoryId?: number,
    public assetAssetId?: string,
    public assetId?: number,
    public assigneeId?: number
  ) {
    this.isActive = false;
  }
}
