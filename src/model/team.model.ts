import { BaseEntity } from 'src/model/base-entity';
import { WorkOrder } from './work-order.model';
import { Employee } from './employee.model';
import { Asset } from './asset.model';
import { Part } from './part.model';

export class Team implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public workorders?: WorkOrder[],
    public tenantId?: number,
    public employees?: Employee[],
    public managerId?: number,
    public assets?: Asset[],
    public parts?: Part[]
  ) {
    this.isActive = false;
  }
}
