import {BaseEntity} from "./base-entity";

export const enum ScheduleType {
  WEEKLY = 'WEEKLY',

  BIWEEKLY = 'BIWEEKLY',

  MONTHLY = 'MONTHLY',

  QUARTERLY = 'QUARTERLY',

  SEMIANNUALLY = 'SEMIANNUALLY',

  ANNUALLY = 'ANNUALLY',

  ENDAFTERCOUNT = 'ENDAFTERCOUNT',

  ENDONDATE = 'ENDONDATE',
}


export class RepeatDefinition implements BaseEntity {
  constructor(
    public id?: string,
    public repetitionNumber?: number,
    public start?: any,
    public end?: any,
    public nextCreateDate?: any,
    public endAfterCount?: number,
    public repeatAfterTaskCompletion?: boolean,
    public rrule?: string,
    public currentTask?: string,
    public hasEnded?: boolean,
    public isActive?: boolean,
    public scheduleType?: ScheduleType,
    public createDate?: any,
    public updateDate?: any,
    public createdBy?: string,
    public updatedBy?: string,
    public tenantId?: string,
    public workorderId?: string
  ) {
    this.repeatAfterTaskCompletion = this.repeatAfterTaskCompletion || false;
    this.hasEnded = this.hasEnded || false;
    this.isActive = this.isActive || false;
  }
}
