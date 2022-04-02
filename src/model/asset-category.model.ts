import { BaseEntity } from 'src/model/base-entity';
import { Asset } from './asset.model';

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

export class AssetCategory implements BaseEntity {
  constructor(
    public id?: string,
    public name?: string,
    public isActive?: boolean,
    public color?: Color,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public assets?: Asset[],
    public tenantId?: number
  ) {
    this.isActive = false;
  }
}
