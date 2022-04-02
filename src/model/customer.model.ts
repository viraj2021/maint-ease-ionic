import { BaseEntity } from 'src/model/base-entity';
import { WorkOrder } from './work-order.model';
import { Asset } from './asset.model';
import { Part } from './part.model';

export class Customer implements BaseEntity {
  constructor(
    public id?: string,
    public name?: string,
    public customerId?: string,
    public phone?: string,
    public email?: string,
    public website?: string,
    public description?: string,
    public type?: string,
    public address?: string,
    public billingName?: string,
    public creditCardName?: string,
    public creditCardNumber?: string,
    public creditCardCVV?: string,
    public creditCardExpiry?: string,
    public currency?: string,
    public customFields?: any,
    public isActive?: boolean,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public billingAddressId?: number,
    public tenantId?: number,
    public workorders?: WorkOrder[],
    public assets?: Asset[],
    public parts?: Part[]
  ) {
    this.isActive = false;
  }
}
