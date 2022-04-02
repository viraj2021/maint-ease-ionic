import { BaseEntity } from 'src/model/base-entity';
import { WorkOrder } from './work-order.model';
import { Bookmark } from './bookmark.model';
import { Team } from './team.model';
import { RestockEvent } from './restock-event.model';
import { Asset } from './asset.model';
import { Part } from './part.model';

export const enum EmployeeType {
  'ADMIN',
  'SUPERVISOR',
  'TECHNICIAN',
  'JUNIOR_TECHNICIAN',
  'COSTAPPROVER',
  'EXTERNAL',
}

export class Employee implements BaseEntity {
  constructor(
    public id?: string,
    public employeeId?: string,
    public employeeNumber?: string,
    public jobTitle?: string,
    public phoneNumber?: string,
    public type?: EmployeeType,
    public isActive?: boolean,
    public customFields?: any,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public userId?: number,
    public workorders?: WorkOrder[],
    public bookmarks?: Bookmark[],
    public leads?: Team[],
    public restockEvents?: RestockEvent[],
    public tenantId?: number,
    public secondaryWorkorders?: WorkOrder[],
    public assets?: Asset[],
    public parts?: Part[],
    public teams?: Team[],
  ) {
    this.isActive = false;
  }
}
