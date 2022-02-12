import { Component, OnInit } from '@angular/core';
import { JhiDataUtils } from '../../services/utils/data-util.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Asset} from '../../../model/asset.model';
import {Employee} from '../../../model/employee.model';
import {Location} from '../../../model/location.model';
import {Vendor} from '../../../model/vendor.model';
import {Customer} from '../../../model/customer.model';
import {Part} from '../../../model/part.model';
import {AssetCategory} from '../../../model/asset-category.model';
import {WorkOrder} from '../../../model/work-order.model';
import {AssetService} from '../../services/asset/asset.service';
import {WorkOrderService} from '../../services/work-order/work-order.service';
import {AssetCategoryService} from '../../services/asset-category/asset-category.service';
import {LocationService} from '../../services/location/location.service';
import {PartService} from '../../services/part/part.service';
import {CustomerService} from '../../services/customer/customer.service';
import {VendorService} from '../../services/vendor/vendor.service';
import {TeamService} from '../../services/team/team.service';
import {EmployeeService} from '../../services/employee/employee.service';
import {Team} from '../../../model/team.model';

@Component({
  selector: 'page-asset-update',
  templateUrl: 'asset-update.html',
})
export class AssetUpdatePage implements OnInit {
  asset: Asset;
  employees: Employee[];
  // @ts-ignore
  teams: Team[];
  vendors: Vendor[];
  customers: Customer[];
  parts: Part[];
  assets: Asset[];
  locations: Location[];
  assetCategories: AssetCategory[];
  workOrders: WorkOrder[];
  purchaseDate: string;
  serviceDate: string;
  warrantyExpirationDate: string;
  createDate: string;
  updateDate: string;
  isSaving = false;
  isNew = true;
  isReadyToSave: boolean;

  form = this.formBuilder.group({
    id: [null, []],
    name: [null, [Validators.required]],
    make: [null, []],
    model: [null, []],
    assetId: [null, []],
    barCode: [null, []],
    serialNumber: [null, []],
    area: [null, []],
    description: [null, []],
    additionalInfo: [null, []],
    purchaseDate: [null, []],
    serviceDate: [null, []],
    purchasePrice: [null, []],
    warrantyExpirationDate: [null, []],
    residualPrice: [null, []],
    usefulLife: [null, []],
    depreciationMethod: [null, []],
    customFields: [null, []],
    isChild: ['false', []],
    isFunctional: ['false', []],
    isActive: ['false', []],
    createDate: [null, []],
    updateDate: [null, []],
    createdBy: [null, []],
    updatedBy: [null, []],
    tenantId: [null, []],
    workers: [null, []],
    teams: [null, []],
    vendors: [null, []],
    customers: [null, []],
    parts: [null, []],
    parentId: [null, []],
    locationId: [null, []],
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
    private teamService: TeamService,
    private vendorService: VendorService,
    private customerService: CustomerService,
    private partService: PartService,
    private locationService: LocationService,
    private assetCategoryService: AssetCategoryService,
    private workOrderService: WorkOrderService,
    private assetService: AssetService
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
    this.assetService.query().subscribe(
      (data) => {
        this.assets = data.body;
      },
      (error) => this.onError(error)
    );
    this.locationService.query().subscribe(
      (data) => {
        this.locations = data.body;
      },
      (error) => this.onError(error)
    );
    this.assetCategoryService.query().subscribe(
      (data) => {
        this.assetCategories = data.body;
      },
      (error) => this.onError(error)
    );
    this.workOrderService.query().subscribe(
      (data) => {
        this.workOrders = data.body;
      },
      (error) => this.onError(error)
    );
    this.activatedRoute.data.subscribe((response) => {
      this.asset = response.data;
      this.isNew = this.asset.id === null || this.asset.id === undefined;
      this.updateForm(this.asset);
    });
  }

  updateForm(asset: Asset) {
    this.form.patchValue({
      id: asset.id,
      name: asset.name,
      make: asset.make,
      model: asset.model,
      assetId: asset.assetId,
      barCode: asset.barCode,
      serialNumber: asset.serialNumber,
      area: asset.area,
      description: asset.description,
      additionalInfo: asset.additionalInfo,
      purchaseDate: this.isNew ? new Date().toISOString() : asset.purchaseDate,
      serviceDate: this.isNew ? new Date().toISOString() : asset.serviceDate,
      purchasePrice: asset.purchasePrice,
      warrantyExpirationDate: this.isNew ? new Date().toISOString() : asset.warrantyExpirationDate,
      residualPrice: asset.residualPrice,
      usefulLife: asset.usefulLife,
      depreciationMethod: asset.depreciationMethod,
      customFields: asset.customFields,
      isChild: asset.isChild,
      isFunctional: asset.isFunctional,
      isActive: asset.isActive,
      createDate: this.isNew ? new Date().toISOString() : asset.createDate,
      updateDate: this.isNew ? new Date().toISOString() : asset.updateDate,
      createdBy: asset.createdBy,
      updatedBy: asset.updatedBy,
      tenantId: asset.tenantId,
      workers: asset.workers,
      teams: asset.teams,
      vendors: asset.vendors,
      customers: asset.customers,
      parts: asset.parts,
      parentId: asset.parentId,
      locationId: asset.locationId,
      categoryId: asset.categoryId,
    });
  }

  save() {
    this.isSaving = true;
    const asset = this.createFromForm();
    if (!this.isNew) {
      this.subscribeToSaveResponse(this.assetService.update(asset));
    } else {
      this.subscribeToSaveResponse(this.assetService.create(asset));
    }
  }

  async onSaveSuccess(response) {
    let action = 'updated';
    if (response.status === 201) {
      action = 'created';
    }
    this.isSaving = false;
    const toast = await this.toastCtrl.create({ message: `Asset ${action} successfully.`, duration: 2000, position: 'middle' });
    await toast.present();
    await this.navController.navigateBack('/tabs/asset');
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
  compareAsset(first: Asset, second: Asset): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackAssetById(index: number, item: Asset) {
    return item.id;
  }
  compareLocation(first: Location, second: Location): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackLocationById(index: number, item: Location) {
    return item.id;
  }
  compareAssetCategory(first: AssetCategory, second: AssetCategory): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackAssetCategoryById(index: number, item: AssetCategory) {
    return item.id;
  }
  compareWorkOrder(first: WorkOrder, second: WorkOrder): boolean {
    return first && first.id && second && second.id ? first.id === second.id : first === second;
  }

  trackWorkOrderById(index: number, item: WorkOrder) {
    return item.id;
  }


  protected subscribeToSaveResponse(result: Observable<HttpResponse<Asset>>) {
    result.subscribe(
      (res: HttpResponse<Asset>) => this.onSaveSuccess(res),
      (res: HttpErrorResponse) => this.onError(res.error)
    );
  }

  private createFromForm(): Asset {
    return {
      ...new Asset(),
      id: this.form.get(['id']).value,
      name: this.form.get(['name']).value,
      make: this.form.get(['make']).value,
      model: this.form.get(['model']).value,
      assetId: this.form.get(['assetId']).value,
      barCode: this.form.get(['barCode']).value,
      serialNumber: this.form.get(['serialNumber']).value,
      area: this.form.get(['area']).value,
      description: this.form.get(['description']).value,
      additionalInfo: this.form.get(['additionalInfo']).value,
      purchaseDate: new Date(this.form.get(['purchaseDate']).value),
      serviceDate: new Date(this.form.get(['serviceDate']).value),
      purchasePrice: this.form.get(['purchasePrice']).value,
      warrantyExpirationDate: new Date(this.form.get(['warrantyExpirationDate']).value),
      residualPrice: this.form.get(['residualPrice']).value,
      usefulLife: this.form.get(['usefulLife']).value,
      depreciationMethod: this.form.get(['depreciationMethod']).value,
      customFields: this.form.get(['customFields']).value,
      isChild: this.form.get(['isChild']).value,
      isFunctional: this.form.get(['isFunctional']).value,
      isActive: this.form.get(['isActive']).value,
      createDate: new Date(this.form.get(['createDate']).value),
      updateDate: new Date(this.form.get(['updateDate']).value),
      createdBy: this.form.get(['createdBy']).value,
      updatedBy: this.form.get(['updatedBy']).value,
      tenantId: this.form.get(['tenantId']).value,
      workers: this.form.get(['workers']).value,
      teams: this.form.get(['teams']).value,
      vendors: this.form.get(['vendors']).value,
      customers: this.form.get(['customers']).value,
      parts: this.form.get(['parts']).value,
      parentId: this.form.get(['parentId']).value,
      locationId: this.form.get(['locationId']).value,
      categoryId: this.form.get(['categoryId']).value,
    };
  }

}
