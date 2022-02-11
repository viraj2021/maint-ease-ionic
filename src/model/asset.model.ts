import { BaseEntity } from 'src/model/base-entity';
import { Note } from './note.model';
import { Faq } from './faq.model';
import { Reading } from './reading.model';
import { AssetDowntime } from './asset-downtime.model';
import { Bookmark } from './bookmark.model';
import { Image } from './image.model';
import { File } from './file.model';
import { Employee } from './employee.model';
import { Team } from './team.model';
import { Vendor } from './vendor.model';
import { Customer } from './customer.model';
import { Part } from './part.model';
import { WorkOrder } from './work-order.model';

export const enum DepreciationMethod {
  'STRAIGHTLINE',
  'DOUBLEDECLINING',
}

export class Asset implements BaseEntity {
  constructor(
    public id?: number,
    public name?: string,
    public make?: string,
    public model?: string,
    public assetId?: string,
    public barCode?: string,
    public serialNumber?: string,
    public area?: string,
    public description?: string,
    public additionalInfo?: string,
    public purchaseDate?: any,
    public serviceDate?: any,
    public purchasePrice?: number,
    public warrantyExpirationDate?: any,
    public residualPrice?: number,
    public usefulLife?: number,
    public depreciationMethod?: DepreciationMethod,
    public customFields?: any,
    public isChild?: boolean,
    public isFunctional?: boolean,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public notes?: Note[],
    public questions?: Faq[],
    public children?: Asset[],
    public readings?: Reading[],
    public downtimes?: AssetDowntime[],
    public bookmarks?: Bookmark[],
    public images?: Image[],
    public files?: File[],
    public tenantId?: number,
    public workers?: Employee[],
    public teams?: Team[],
    public vendors?: Vendor[],
    public customers?: Customer[],
    public parts?: Part[],
    public parentAssetId?: string,
    public parentId?: number,
    public locationId?: number,
    public categoryName?: string,
    public categoryId?: number,
    public workorders?: WorkOrder[]
  ) {
    this.isChild = false;
    this.isFunctional = false;
    this.isActive = false;
  }
}
