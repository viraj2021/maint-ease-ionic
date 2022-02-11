import { BaseEntity } from 'src/model/base-entity';

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

export class VendorType implements BaseEntity {
  constructor(
    public id?: number,
    public type?: string,
    public isActive?: boolean,
    public color?: Color,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number
  ) {
    this.isActive = false;
  }
}
