import { BaseEntity } from 'src/model/base-entity';
import { Part } from './part.model';

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

export class PartCategory implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public isActive?: boolean,
    public color?: Color,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public parts?: Part[],
    public tenantId?: number
  ) {
    this.isActive = false;
  }
}
