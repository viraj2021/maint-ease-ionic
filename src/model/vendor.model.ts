import { BaseEntity } from 'src/model/base-entity';
import { WorkOrder } from './work-order.model';
import { Asset } from './asset.model';
import { Part } from './part.model';

export class Vendor implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public vendorId?: string,
    public phone?: string,
    public website?: string,
    public email?: string,
    public type?: string,
    public address?: string,
    public description?: string,
    public primaryContactName?: string,
    public primaryContactPhone?: string,
    public primaryContactEmail?: string,
    public secondaryContactName?: string,
    public secondaryContactPhone?: string,
    public secondaryContactEmail?: string,
    public customFields?: any,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public vendortypeType?: string,
    public vendortypeId?: number,
    public workorders?: WorkOrder[],
    public assets?: Asset[],
    public parts?: Part[]
  ) {
    this.isActive = false;
  }
}
