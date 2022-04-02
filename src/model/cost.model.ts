import { BaseEntity } from 'src/model/base-entity';

export const enum CostType {
  'PART',
  'LABOR',
  'MISC',
}

export const enum CostStatus {
  'CREATED',
  'APPROVED',
  'CANCELLED',
  'REJECTED',
}

export class Allocation implements BaseEntity {
  constructor(
    public id?: string,
    public name?: string,
    public type?: CostType,
    public quantity?: number,
    public costPerUnit?: number,
    public total?: number,
    public status?: CostStatus,
    public isSystemGenerated?: boolean,
    public refId?: string,
    public approverRemark?: string,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public partId?: number,
    public workorderWonumber?: string,
    public workorderId?: number,
    public accountId?: number
  ) {
    this.isSystemGenerated = false;
    this.isActive = false;
  }
}
