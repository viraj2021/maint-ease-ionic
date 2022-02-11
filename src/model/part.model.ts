import { BaseEntity } from 'src/model/base-entity';
import { Faq } from './faq.model';
import { Note } from './note.model';
import { RestockEvent } from './restock-event.model';
import { Bookmark } from './bookmark.model';
import { Image } from './image.model';
import { File } from './file.model';
import { Location } from './location.model';
import { Employee } from './employee.model';
import { Team } from './team.model';
import { Vendor } from './vendor.model';
import { Customer } from './customer.model';
import { WorkOrder } from './work-order.model';
import { Asset } from './asset.model';

export class Part implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public partId?: string,
    public barCode?: string,
    public description?: string,
    public costPerUnit?: number,
    public quantity?: number,
    public minQuantity?: number,
    public serialNumber?: string,
    public make?: string,
    public model?: string,
    public area?: string,
    public additionalInfo?: string,
    public customFields?: any,
    public isChild?: boolean,
    public isActive?: boolean,
    public isTool?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public questions?: Faq[],
    public children?: Part[],
    public notes?: Note[],
    public restockEvents?: RestockEvent[],
    public bookmarks?: Bookmark[],
    public images?: Image[],
    public files?: File[],
    public tenantId?: number,
    public locations?: Location[],
    public workers?: Employee[],
    public teams?: Team[],
    public vendors?: Vendor[],
    public customers?: Customer[],
    public parentPartId?: string,
    public parentId?: number,
    public purchaseorderId?: number,
    public categoryName?: string,
    public categoryId?: number,
    public workorders?: WorkOrder[],
    public assets?: Asset[]
  ) {
    this.isChild = false;
    this.isActive = false;
    this.isTool = false;
  }
}
