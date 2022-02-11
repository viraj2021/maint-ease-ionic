import { BaseEntity } from 'src/model/base-entity';

export const enum TaskPriority {
  'CRITICAL',
  'HIGH',
  'MEDIUM',
  'LOW',
  'NONE',
}

export const enum TaskStatus {
  'CREATED',
  'SCHEDULED',
  'INPROGRESS',
  'ONHOLD',
  'COMPLETED',
  'CANCELLED',
  'CLOSED',
}

export class Task implements BaseEntity {
  constructor(
    public id?: number,
    public title?: string,
    public taskId?: string,
    public description?: string,
    public isActive?: boolean,
    public priority?: TaskPriority,
    public status?: TaskStatus,
    public estimatedDuration?: number,
    public actualDuration?: number,
    public dueDate?: any,
    public scheduledDate?: any,
    public completionDate?: any,
    public completedBy?: string,
    public workInstruction?: string,
    public completionDescription?: string,
    public isGenerated?: boolean,
    public customFields?: any,
    public shareWithEmail?: string,
    public isArchived?: boolean,
    public refItem?: string,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: number,
    public workorderWonumber?: string,
    public workorderId?: number
  ) {
    this.isActive = false;
    this.isGenerated = false;
    this.isArchived = false;
  }
}
