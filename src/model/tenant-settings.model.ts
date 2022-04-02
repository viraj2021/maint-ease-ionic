import { BaseEntity } from 'src/model/base-entity';

export const enum SettingType {
  'GENERAL',
  'VIEW',
  'FEATURE',
  'ENTITY',
  'TEMPLATE',
  'ACTION',
  'VALIDATION',
}

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

export class TenantSettings implements BaseEntity {
  constructor(
    public id?: string,
    public type?: SettingType,
    public contextType?: ContextType,
    public key?: string,
    public value?: any,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number
  ) {}
}
