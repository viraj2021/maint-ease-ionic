import { BaseEntity } from 'src/model/base-entity';
import { WorkOrder } from './work-order.model';

export const enum Color {
  'YELLOW',
  'RED',
  'GREEN',
  'BLUE',
  'GRAY',
  'CYAN',
  'BLACK',
  'MAGENTA',
  'ORANGE',
  'PURPLE',
  'TEAL',
  'MAROON',
  'EMERALD',
}

export class WorkOrderCategory implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public isActive?: boolean,
    public color?: Color,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public workorders?: WorkOrder[],
    public tenantId?: number
  ) {
    this.isActive = false;
  }
}
