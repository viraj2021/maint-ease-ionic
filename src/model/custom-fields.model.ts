import { BaseEntity } from 'src/model/base-entity';

export const enum ContextType {
  'WORKORDER',
  'PART',
  'ASSET',
  'CUSTOMER',
  'EMPLOYEE',
  'TASK',
  'VENDOR',
  'PURCHASEORDER',
  'READING',
  'REQUEST',
  'APPROVAL',
}

export class CustomFields implements BaseEntity {
  constructor(
    public id?: number,
    public contextType?: ContextType,
    public metaData?: any,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number
  ) {
    this.isActive = false;
  }
}
