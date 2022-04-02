import { BaseEntity } from 'src/model/base-entity';
import { Faq } from './faq.model';
import { Reading } from './reading.model';
import { WorkOrder } from './work-order.model';
import { Asset } from './asset.model';
import { Part } from './part.model';

export class Location implements BaseEntity {
  constructor(
    public id?: string,
    public name?: string,
    public address?: string,
    public isChild?: boolean,
    public isActive?: boolean,
    public longitude?: string,
    public latitude?: string,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public questions?: Faq[],
    public children?: Location[],
    public readings?: Reading[],
    public workorders?: WorkOrder[],
    public assets?: Asset[],
    public tenantId?: number,
    public parentAddress?: string,
    public parentId?: number,
    public parts?: Part[]
  ) {
    this.isChild = false;
    this.isActive = false;
  }
}
