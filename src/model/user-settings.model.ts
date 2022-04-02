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

export class UserSettings implements BaseEntity {
  constructor(
    public id?: string,
    public type?: SettingType,
    public key?: string,
    public value?: any,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public userId?: number,
    public tenantId?: number
  ) {}
}
