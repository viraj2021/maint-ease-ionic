import { BaseEntity } from 'src/model/base-entity';
import { File } from './file.model';

export class RestockEvent implements BaseEntity {
  constructor(
    public id?: number,
    public addedQuantity?: number,
    public newQuantity?: number,
    public description?: string,
    public isFromPO?: boolean,
    public eventDate?: any,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public files?: File[],
    public tenantId?: number,
    public partPartId?: string,
    public partId?: number,
    public employeeId?: number
  ) {
    this.isFromPO = false;
  }
}
