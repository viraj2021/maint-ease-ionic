import { Component, OnInit } from '@angular/core';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {WorkOrder} from '../../../model/work-order.model';
import {Employee} from '../../../model/employee.model';
import {Vendor} from '../../../model/vendor.model';
import {Customer} from '../../../model/customer.model';
import {Asset} from '../../../model/asset.model';
import {Location} from '../../../model/location.model';
import {Part} from '../../../model/part.model';
import {Team} from '../../../model/team.model';
import {WorkOrderCategory} from '../../../model/work-order-category.model';
import {EmployeeService} from '../../services/employee/employee.service';
import {VendorService} from '../../services/vendor/vendor.service';
import {AssetService} from '../../services/asset/asset.service';
import {PartService} from '../../services/part/part.service';
import {LocationService} from '../../services/location/location.service';
import {WorkOrderCategoryService} from '../../services/work-order-category/work-order-category.service';
import {WorkOrderService} from '../../services/work-order/work-order.service';
import {CustomerService} from '../../services/customer/customer.service';
import {TeamService} from '../../services/team/team.service';

@Component({
  selector: 'page-work-order-update',
  templateUrl: 'work-order-update.html',
})
export class WorkOrderUpdatePage implements OnInit {
  workOrder: WorkOrder;
  employees: Employee[];
  vendors: Vendor[];
  customers: Customer[];
  assets: Asset[];
  parts: Part[];
  locations: Location[];
  teams: Team[];
  workOrderCategories: WorkOrderCategory[];
  dueDate: string;
  scheduledDate: string;
  completionDate: string;
  verificationDate: string;
  createDate: string;
  updateDate: string;
  isSaving = false;
  isNew = true;
  isReadyToSave: boolean;

  form = this.formBuilder.group({
    id: [null, []],
    title: [null, [Validators.required]],
    wonumber: [null, []],
    description: [null, []],
    priority: [null, []],
    dueDate: [null, []],
    scheduledDate: [null, []],
    estimatedDuration: [null, []],
    actualDuration: [null, []],
    completionDate: [null, []],
    status: [null, []],
    isRepeating: ['false', []],
    isGenerated: ['false', []],
    requireSignature: ['false', []],
    shareWithEmail: [null, []],
    isArchived: ['false', []],
    customFields: [null, []],
    isActive: ['false', []],
    workInstruction: [null, []],
    estimatedLabor: [null, []],
    actualLabor: [null, []],
    problemDescription: [null, []],
    solutionDescription: [null, []],
    rootCauseDescription: [null, []],
    associatedPOs: [null, []],
    linkedWOs: [null, []],
    refItem: [null, []],
    isVerified: ['false', []],
    verifiedBy: [null, []],
    verificationDate: [null, []],
    createDate: [null, []],
    updateDate: [null, []],
    completedBy: [null, []],
    createdBy: [null, []],
    updatedBy: [null, []],
    repeatDefinitionId: [null, []],
    tenantId: [null, []],
    additionalAssignees: [null, []],
    vendors: [null, []],
    customers: [null, []],
    assets: [null, []],
    parts: [null, []],
    locationId: [null, []],
    assigneeId: [null, []],
    teamId: [null, []],
    categoryId: [null, []],
  });

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected navController: NavController,
    protected formBuilder: FormBuilder,
    public platform: Platform,
    protected toastCtrl: ToastController,
    private dataUtils: JhiDataUtils,
    private employeeService: EmployeeService,
    private vendorService: VendorService,
    private customerService: CustomerService,
    private assetService: AssetService,
    private partService: PartService,
    private locationService: LocationService,
    private teamService: TeamService,
    private workOrderCategoryService: WorkOrderCategoryService,
    private workOrderService: WorkOrderService
  ) {
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ngOnInit() {
    this.employeeService.query().subscribe(
      (data) => {
        this.employees = data.body;
      },
      (error) => this.onError(error)
    );
    this.vendorService.query().subscribe(
      (data) => {
        this.vendors = data.body;
      },
      (error) => this.onError(error)
    );
    this.customerService.query().subscribe(
      (data) => {
        this.customers = data.body;
      },
      (error) => this.onError(error)
    );
    this.assetService.query().subscribe(
      (data) => {
        this.assets = data.body;
      },
      (error) => this.onError(error)
    );
    this.partService.query().subscribe(
      (data) => {
        this.parts = data.body;
      },
      (error) => this.onError(error)
    );
    this.locationService.query().subscribe(
      (data) => {
        this.locations = data.body;
      },
      (error) => this.onError(error)
    );
    this.teamService.query().subscribe(
      (data) => {
        this.teams = data.body;
      },
      (error) => this.onError(error)
    );
    this.workOrderCategoryService.query().subscribe(
      (data) => {
        this.workOrderCategories = data.body;
      },
      (error) => this.onError(error)
    );
    this.activatedRoute.data.subscribe((response) => {
      this.workOrder = response.data;
      this.isNew = this.workOrder.id === null || this.workOrder.id === undefined;
      this.updateForm(this.workOrder);
    });
  }

  updateForm(workOrder: WorkOrder) {
    this.form.patchValue({
      id: workOrder.id,
      title: workOrder.title,
      wonumber: workOrder.wonumber,
      description: workOrder.description,
      priority: workOrder.priority,
      dueDate: this.isNew ? new Date().toISOString() : workOrder.dueDate,
      scheduledDate: this.isNew ? new Date().toISOString() : workOrder.scheduledDate,
      estimatedDuration: workOrder.estimatedDuration,
      actualDuration: workOrder.actualDuration,
      completionDate: this.isNew ? new Date().toISOString() : workOrder.completionDate,
      status: workOrder.status,
      isRepeating: workOrder.isRepeating,
      isGenerated: workOrder.isGenerated,
      requireSignature: workOrder.requireSignature,
      shareWithEmail: workOrder.shareWithEmail,
      isArchived: workOrder.isArchived,
      customFields: workOrder.customFields,
      isActive: workOrder.isActive,
      workInstruction: workOrder.workInstruction,
      estimatedLabor: workOrder.estimatedLabor,
      actualLabor: workOrder.actualLabor,
      problemDescription: workOrder.problemDescription,
      solutionDescription: workOrder.solutionDescription,
      rootCauseDescription: workOrder.rootCauseDescription,
      associatedPOs: workOrder.associatedPOs,
      linkedWOs: workOrder.linkedWOs,
      refItem: workOrder.refItem,
      isVerified: workOrder.isVerified,
      verifiedBy: workOrder.verifiedBy,
      verificationDate: this.isNew ? new Date().toISOString() : workOrder.verificationDate,
      createDate: this.isNew ? new Date().toISOString() : workOrder.createDate,
      updateDate: this.isNew ? new Date().toISOString() : workOrder.updateDate,
      completedBy: workOrder.completedBy,
      createdBy: workOrder.createdBy,
      updatedBy: workOrder.updatedBy,
      repeatDefinitionId: workOrder.repeatDefinitionId,
      tenantId: workOrder.tenantId,
      additionalAssignees: workOrder.additionalAssignees,
      vendors: workOrder.vendors,
      customers: workOrder.customers,
      assets: workOrder.assets,
      parts: workOrder.parts,
      locationId: workOrder.locationId,
      assigneeId: workOrder.assigneeId,
      teamId: workOrder.teamId,
      categoryId: workOrder.categoryId,
    });
  }

  save() {
    this.isSaving = true;
    const workOrder = this.createFromForm();
    if (!this.isNew) {
      this.subscribeToSaveResponse(this.workOrderService.update(workOrder));
    } else {
      this.subscribeToSaveResponse(this.workOrderService.create(workOrder));
    }
  }


  async onSaveSuccess(response) {
    let action = 'updated';
    if (response.status === 201) {
      action = 'created';
    }
    this.isSaving = false;
    const toast = await this.toastCtrl.create({ message: `WorkOrder ${action} successfully.`, duration: 2000, position: 'middle' });
    await toast.present();
    await this.navController.navigateBack('/tabs/entities/work-order');
  }

  previousState() {
    window.history.back();
  }

  async onError(error) {
    this.isSaving = false;
    console.error(error);
    const toast = await this.toastCtrl.create({ message: 'Failed to load data', duration: 2000, position: 'middle' });
    await toast.present();
  }

  byteSize(field) {
    return this.dataUtils.byteSize(field);
  }

  openFile(contentType, field) {
    return this.dataUtils.openFile(contentType, field);
  }

  setFileData(event, field, isImage) {
    this.dataUtils.loadFileToForm(event, this.form, field, isImage).subscribe();
  }

  compareEmployee(first: Employee, second: Employee): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackEmployeeById(index: number, item: Employee) {
    return item.id;
  }
  compareVendor(first: Vendor, second: Vendor): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackVendorById(index: number, item: Vendor) {
    return item.id;
  }
  compareCustomer(first: Customer, second: Customer): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackCustomerById(index: number, item: Customer) {
    return item.id;
  }
  compareAsset(first: Asset, second: Asset): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackAssetById(index: number, item: Asset) {
    return item.id;
  }
  comparePart(first: Part, second: Part): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackPartById(index: number, item: Part) {
    return item.id;
  }
  compareLocation(first: Location, second: Location): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackLocationById(index: number, item: Location) {
    return item.id;
  }
  compareTeam(first: Team, second: Team): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackTeamById(index: number, item: Team) {
    return item.id;
  }
  compareWorkOrderCategory(first: WorkOrderCategory, second: WorkOrderCategory): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackWorkOrderCategoryById(index: number, item: WorkOrderCategory) {
    return item.id;
  }


  protected subscribeToSaveResponse(result: Observable<HttpResponse<WorkOrder>>) {
    result.subscribe(
      (res: HttpResponse<WorkOrder>) => this.onSaveSuccess(res),
      (res: HttpErrorResponse) => this.onError(res.error)
    );
  }

  private createFromForm(): WorkOrder {
    return {
      ...new WorkOrder(),
      id: this.form.get(['id']).value,
      title: this.form.get(['title']).value,
      wonumber: this.form.get(['wonumber']).value,
      description: this.form.get(['description']).value,
      priority: this.form.get(['priority']).value,
      dueDate: new Date(this.form.get(['dueDate']).value),
      scheduledDate: new Date(this.form.get(['scheduledDate']).value),
      estimatedDuration: this.form.get(['estimatedDuration']).value,
      actualDuration: this.form.get(['actualDuration']).value,
      completionDate: new Date(this.form.get(['completionDate']).value),
      status: this.form.get(['status']).value,
      isRepeating: this.form.get(['isRepeating']).value,
      isGenerated: this.form.get(['isGenerated']).value,
      requireSignature: this.form.get(['requireSignature']).value,
      shareWithEmail: this.form.get(['shareWithEmail']).value,
      isArchived: this.form.get(['isArchived']).value,
      customFields: this.form.get(['customFields']).value,
      isActive: this.form.get(['isActive']).value,
      workInstruction: this.form.get(['workInstruction']).value,
      estimatedLabor: this.form.get(['estimatedLabor']).value,
      actualLabor: this.form.get(['actualLabor']).value,
      problemDescription: this.form.get(['problemDescription']).value,
      solutionDescription: this.form.get(['solutionDescription']).value,
      rootCauseDescription: this.form.get(['rootCauseDescription']).value,
      associatedPOs: this.form.get(['associatedPOs']).value,
      linkedWOs: this.form.get(['linkedWOs']).value,
      refItem: this.form.get(['refItem']).value,
      isVerified: this.form.get(['isVerified']).value,
      verifiedBy: this.form.get(['verifiedBy']).value,
      verificationDate: new Date(this.form.get(['verificationDate']).value),
      createDate: new Date(this.form.get(['createDate']).value),
      updateDate: new Date(this.form.get(['updateDate']).value),
      completedBy: this.form.get(['completedBy']).value,
      createdBy: this.form.get(['createdBy']).value,
      updatedBy: this.form.get(['updatedBy']).value,
      repeatDefinitionId: this.form.get(['repeatDefinitionId']).value,
      tenantId: this.form.get(['tenantId']).value,
      additionalAssignees: this.form.get(['additionalAssignees']).value,
      vendors: this.form.get(['vendors']).value,
      customers: this.form.get(['customers']).value,
      assets: this.form.get(['assets']).value,
      parts: this.form.get(['parts']).value,
      locationId: this.form.get(['locationId']).value,
      assigneeId: this.form.get(['assigneeId']).value,
      teamId: this.form.get(['teamId']).value,
      categoryId: this.form.get(['categoryId']).value,
    };
  }
}
