import {BaseEntity} from './base-entity';

export const enum ChecklistItemType {
  STATUSCHECK = 'STATUSCHECK',

  NUMBER = 'NUMBER',

  TEXT = 'TEXT',

  METER = 'METER',

  MULTICHOICE = 'MULTICHOICE',
}

export class ChecklistItem implements BaseEntity {
  constructor(
    public id?: string,
    public title?: string,
    public itemId?: string,
    public description?: string,
    public comment?: string,
    public itemType?: ChecklistItemType,
    public itemOptions?: string,
    public itemResult?: string,
    public itemOrder?: number,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: string,
    public workorderId?: string,
    public taskId?: string
  ) {
    this.isActive = this.isActive || false;
  }
}
