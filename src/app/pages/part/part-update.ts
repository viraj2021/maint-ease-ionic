import { Component, OnInit } from '@angular/core';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Part} from '../../../model/part.model';
import {Employee} from '../../../model/employee.model';
import {Location} from '../../../model/location.model';
import {Team} from '../../../model/team.model';
import {Vendor} from '../../../model/vendor.model';
import {Customer} from '../../../model/customer.model';
import {PartCategory} from '../../../model/part-category.model';
import {WorkOrder} from '../../../model/work-order.model';
import {Asset} from '../../../model/asset.model';
import {LocationService} from '../../services/location/location.service';
import {EmployeeService} from '../../services/employee/employee.service';
import {TeamService} from '../../services/team/team.service';
import {VendorService} from '../../services/vendor/vendor.service';
import {CustomerService} from '../../services/customer/customer.service';
import {PartCategoryService} from '../../services/part-category/part-category.service';
import {WorkOrderService} from '../../services/work-order/work-order.service';
import {AssetService} from '../../services/asset/asset.service';
import {PartService} from '../../services/part/part.service';

class PurchaseOrder {
}

@Component({
  selector: 'page-part-update',
  templateUrl: 'part-update.html',
})
export class PartUpdatePage implements OnInit {
  part: Part;
  locations: Location[];
  employees: Employee[];
  teams: Team[];
  vendors: Vendor[];
  customers: Customer[];
  parts: Part[];
  purchaseOrders: PurchaseOrder[];
  partCategories: PartCategory[];
  workOrders: WorkOrder[];
  assets: Asset[];
  createDate: string;
  updateDate: string;
  isSaving = false;
  isNew = true;
  isReadyToSave: boolean;

  form = this.formBuilder.group({
    id: [null, []],
    name: [null, [Validators.required]],
    partId: [null, []],
    barCode: [null, []],
    description: [null, []],
    costPerUnit: [null, []],
    quantity: [null, []],
    minQuantity: [null, []],
    serialNumber: [null, []],
    make: [null, []],
    model: [null, []],
    area: [null, []],
    additionalInfo: [null, []],
    customFields: [null, []],
    isChild: ['false', []],
    isActive: ['false', []],
    isTool: ['false', []],
    createDate: [null, []],
    updateDate: [null, []],
    createdBy: [null, []],
    updatedBy: [null, []],
    tenantId: [null, []],
    locations: [null, []],
    workers: [null, []],
    teams: [null, []],
    vendors: [null, []],
    customers: [null, []],
    parentId: [null, []],
    purchaseorderId: [null, []],
    categoryId: [null, []],
  });

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected navController: NavController,
    protected formBuilder: FormBuilder,
    public platform: Platform,
    protected toastCtrl: ToastController,
    private dataUtils: JhiDataUtils,
    private locationService: LocationService,
    private employeeService: EmployeeService,
    private teamService: TeamService,
    private vendorService: VendorService,
    private customerService: CustomerService,
    private partCategoryService: PartCategoryService,
    private workOrderService: WorkOrderService,
    private assetService: AssetService,
    private partService: PartService
  ) {
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ngOnInit() {
    this.locationService.query().subscribe(
      (data) => {
        this.locations = data.body;
      },
      (error) => this.onError(error)
    );
    this.employeeService.query().subscribe(
      (data) => {
        this.employees = data.body;
      },
      (error) => this.onError(error)
    );
    this.teamService.query().subscribe(
      (data) => {
        this.teams = data.body;
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
    this.partService.query().subscribe(
      (data) => {
        this.parts = data.body;
      },
      (error) => this.onError(error)
    );
    this.partCategoryService.query().subscribe(
      (data) => {
        this.partCategories = data.body;
      },
      (error) => this.onError(error)
    );
    this.workOrderService.query().subscribe(
      (data) => {
        this.workOrders = data.body;
      },
      (error) => this.onError(error)
    );
    this.assetService.query().subscribe(
      (data) => {
        this.assets = data.body;
      },
      (error) => this.onError(error)
    );
    this.activatedRoute.data.subscribe((response) => {
      this.part = response.data;
      this.isNew = this.part.id === null || this.part.id === undefined;
      this.updateForm(this.part);
    });
  }

  updateForm(part: Part) {
    this.form.patchValue({
      id: part.id,
      name: part.name,
      partId: part.partId,
      barCode: part.barCode,
      description: part.description,
      costPerUnit: part.costPerUnit,
      quantity: part.quantity,
      minQuantity: part.minQuantity,
      serialNumber: part.serialNumber,
      make: part.make,
      model: part.model,
      area: part.area,
      additionalInfo: part.additionalInfo,
      customFields: part.customFields,
      isChild: part.isChild,
      isActive: part.isActive,
      isTool: part.isTool,
      createDate: this.isNew ? new Date().toISOString() : part.createDate,
      updateDate: this.isNew ? new Date().toISOString() : part.updateDate,
      createdBy: part.createdBy,
      updatedBy: part.updatedBy,
      tenantId: part.tenantId,
      locations: part.locations,
      workers: part.workers,
      teams: part.teams,
      vendors: part.vendors,
      customers: part.customers,
      parentId: part.parentId,
      purchaseorderId: part.purchaseorderId,
      categoryId: part.categoryId,
    });
  }

  save() {
    this.isSaving = true;
    const part = this.createFromForm();
    if (!this.isNew) {
      this.subscribeToSaveResponse(this.partService.update(part));
    } else {
      this.subscribeToSaveResponse(this.partService.create(part));
    }
  }

  async onSaveSuccess(response) {
    let action = 'updated';
    if (response.status === 201) {
      action = 'created';
    }
    this.isSaving = false;
    const toast = await this.toastCtrl.create({ message: `Part ${action} successfully.`, duration: 2000, position: 'middle' });
    await toast.present();
    await this.navController.navigateBack('/tabs/part');
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

  compareLocation(first: Location, second: Location): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackLocationById(index: number, item: Location) {
    return item.id;
  }
  compareEmployee(first: Employee, second: Employee): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackEmployeeById(index: number, item: Employee) {
    return item.id;
  }
  compareTeam(first: Team, second: Team): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackTeamById(index: number, item: Team) {
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
  comparePart(first: Part, second: Part): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackPartById(index: number, item: Part) {
    return item.id;
  }

  comparePartCategory(first: PartCategory, second: PartCategory): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackPartCategoryById(index: number, item: PartCategory) {
    return item.id;
  }
  compareWorkOrder(first: WorkOrder, second: WorkOrder): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackWorkOrderById(index: number, item: WorkOrder) {
    return item.id;
  }
  compareAsset(first: Asset, second: Asset): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackAssetById(index: number, item: Asset) {
    return item.id;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<Part>>) {
    result.subscribe(
      (res: HttpResponse<Part>) => this.onSaveSuccess(res),
      (res: HttpErrorResponse) => this.onError(res.error)
    );
  }

  private createFromForm(): Part {
    return {
      ...new Part(),
      id: this.form.get(['id']).value,
      name: this.form.get(['name']).value,
      partId: this.form.get(['partId']).value,
      barCode: this.form.get(['barCode']).value,
      description: this.form.get(['description']).value,
      costPerUnit: this.form.get(['costPerUnit']).value,
      quantity: this.form.get(['quantity']).value,
      minQuantity: this.form.get(['minQuantity']).value,
      serialNumber: this.form.get(['serialNumber']).value,
      make: this.form.get(['make']).value,
      model: this.form.get(['model']).value,
      area: this.form.get(['area']).value,
      additionalInfo: this.form.get(['additionalInfo']).value,
      customFields: this.form.get(['customFields']).value,
      isChild: this.form.get(['isChild']).value,
      isActive: this.form.get(['isActive']).value,
      isTool: this.form.get(['isTool']).value,
      createDate: new Date(this.form.get(['createDate']).value),
      updateDate: new Date(this.form.get(['updateDate']).value),
      createdBy: this.form.get(['createdBy']).value,
      updatedBy: this.form.get(['updatedBy']).value,
      tenantId: this.form.get(['tenantId']).value,
      locations: this.form.get(['locations']).value,
      workers: this.form.get(['workers']).value,
      teams: this.form.get(['teams']).value,
      vendors: this.form.get(['vendors']).value,
      customers: this.form.get(['customers']).value,
      parentId: this.form.get(['parentId']).value,
      purchaseorderId: this.form.get(['purchaseorderId']).value,
      categoryId: this.form.get(['categoryId']).value,
    };
  }

}
