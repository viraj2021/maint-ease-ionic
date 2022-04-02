import { BaseEntity } from 'src/model/base-entity';
import { Note } from './note.model';
import { Allocation } from './cost.model';
import { Bookmark } from './bookmark.model';
import { Image } from './image.model';
import { File } from './file.model';
import { Task } from './task.model';
import { Employee } from './employee.model';
import { Vendor } from './vendor.model';
import { Customer } from './customer.model';
import { Asset } from './asset.model';
import { Part } from './part.model';
import {ChecklistItem} from "./checklist-item.model";
import {RepeatDefinition} from "./repeat-definition.model";

export const enum Priority {
  'CRITICAL',
  'HIGH',
  'MEDIUM',
  'LOW',
  'NONE',
}

export const enum Status {
  'DRAFT',
  'CREATED',
  'SCHEDULED',
  'INPROGRESS',
  'ONHOLD',
  'COMPLETED',
  'CANCELLED',
  'CLOSED',
}

export class WorkOrder implements BaseEntity {
  constructor(
    public id?: string,
    public title?: string,
    public wonumber?: string,
    public description?: string,
    public priority?: Priority,
    public dueDate?: any,
    public scheduledDate?: any,
    public estimatedDuration?: number,
    public actualDuration?: number,
    public completionDate?: any,
    public status?: Status,
    public isRepeating?: boolean,
    public isGenerated?: boolean,
    public requireSignature?: boolean,
    public shareWithEmail?: string,
    public isArchived?: boolean,
    public customFields?: any,
    public checklist?: any,
    public isActive?: boolean,
    public workInstruction?: string,
    public estimatedLabor?: number,
    public actualLabor?: number,
    public problemDescription?: string,
    public solutionDescription?: string,
    public rootCauseDescription?: string,
    public associatedPOs?: string,
    public linkedWOs?: string,
    public refItem?: string,
    public isVerified?: boolean,
    public verifiedBy?: string,
    public verificationDate?: any,
    public createDate?: any,
    public updateDate?: any,
    public completedBy?: string,
    public createdBy?: string,
    public updatedBy?: string,
    public repeatDefinitionId?: number,
    public repeatDefinition?: RepeatDefinition | null,
    public notes?: Note[],
    public allocations?: Allocation[],
    public checklistName?: string,
    public checklistItems?: ChecklistItem[],
    public checklistValues?: Map<string, string>,
    public bookmarks?: Bookmark[],
    public images?: Image[],
    public files?: File[],
    public tasks?: Task[],
    public tenantId?: number,
    public additionalAssignees?: Employee[],
    public vendors?: Vendor[],
    public customers?: Customer[],
    public assets?: Asset[],
    public parts?: Part[],
    public locationId?: number,
    public assigneeId?: number,
    public teamName?: string,
    public teamId?: number,
    public categoryName?: string,
    public categoryId?: number,
    public fieldMetaData?: any
  ) {
    this.isRepeating = false;
    this.isGenerated = false;
    this.requireSignature = false;
    this.isArchived = false;
    this.isActive = false;
    this.isVerified = false;
  }
}
