import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {RequestService} from '../../services/request/request.service';
import {Request} from '../../../model/request.model';
import {Asset} from '../../../model/asset.model';
import {AssetService} from '../../services/asset/asset.service';
import {LocationService} from '../../services/location/location.service';
import {Location} from '../../../model/location.model';

@Component({
  selector: 'page-request-update',
  templateUrl: 'request-update.html',
})
export class RequestUpdatePage implements OnInit {
  request: Request;
  assets: Asset[];
  locations: Location[];
  createDate: string;
  updateDate: string;
  isSaving = false;
  isNew = true;
  isReadyToSave: boolean;

  form = this.formBuilder.group({
    id: [null, []],
    title: [null, [Validators.required]],
    requestId: [null, []],
    description: [null, []],
    priority: [null, []],
    isActive: ['false', []],
    additionalInfo: [null, []],
    approverRemark: [null, []],
    createDate: [null, []],
    updateDate: [null, []],
    createdBy: [null, []],
    updatedBy: [null, []],
    assetId: [null, []],
    locationId: [null, []],
    tenantId: [null, []],
  });

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected navController: NavController,
    protected formBuilder: FormBuilder,
    public platform: Platform,
    protected toastCtrl: ToastController,
    private assetService: AssetService,
    private locationService: LocationService,
    private requestService: RequestService
  ) {
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ngOnInit() {
    this.assetService.query({ filter: 'request-is-null' }).subscribe(
      (data) => {
        if (!this.request.assetId) {
          this.assets = data.body;
        } else {
          this.assetService.find(this.request.assetId).subscribe(
            (subData: HttpResponse<Asset>) => {
              this.assets = [subData.body].concat(subData.body);
            },
            (error) => this.onError(error)
          );
        }
      },
      (error) => this.onError(error)
    );
    this.locationService.query({ filter: 'request-is-null' }).subscribe(
      (data) => {
        if (!this.request.locationId) {
          this.locations = data.body;
        } else {
          this.locationService.find(this.request.locationId).subscribe(
            (subData: HttpResponse<Location>) => {
              this.locations = [subData.body].concat(subData.body);
            },
            (error) => this.onError(error)
          );
        }
      },
      (error) => this.onError(error)
    );
    this.activatedRoute.data.subscribe((response) => {
      this.request = response.data;
      this.isNew = this.request.id === null || this.request.id === undefined;
      this.updateForm(this.request);
    });
  }

  updateForm(request: Request) {
    this.form.patchValue({
      id: request.id,
      title: request.title,
      requestId: request.requestId,
      description: request.description,
      priority: request.priority,
      isActive: request.isActive,
      additionalInfo: request.additionalInfo,
      approverRemark: request.approverRemark,
      createDate: this.isNew ? new Date().toISOString() : request.createDate,
      updateDate: this.isNew ? new Date().toISOString() : request.updateDate,
      createdBy: request.createdBy,
      updatedBy: request.updatedBy,
      assetId: request.assetId,
      locationId: request.locationId,
      tenantId: request.tenantId,
    });
  }

  save() {
    this.isSaving = true;
    const request = this.createFromForm();
    if (!this.isNew) {
      this.subscribeToSaveResponse(this.requestService.update(request));
    } else {
      this.subscribeToSaveResponse(this.requestService.create(request));
    }
  }

  async onSaveSuccess(response) {
    let action = 'updated';
    if (response.status === 201) {
      action = 'created';
    }
    this.isSaving = false;
    const toast = await this.toastCtrl.create({ message: `Request ${action} successfully.`, duration: 2000, position: 'middle' });
    await toast.present();
    await this.navController.navigateBack('/tabs/entities/request');
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

  protected subscribeToSaveResponse(result: Observable<HttpResponse<Request>>) {
    result.subscribe(
      (res: HttpResponse<Request>) => this.onSaveSuccess(res),
      (res: HttpErrorResponse) => this.onError(res.error)
    );
  }

  private createFromForm(): Request {
    return {
      ...new Request(),
      id: this.form.get(['id']).value,
      title: this.form.get(['title']).value,
      requestId: this.form.get(['requestId']).value,
      description: this.form.get(['description']).value,
      priority: this.form.get(['priority']).value,
      isActive: this.form.get(['isActive']).value,
      additionalInfo: this.form.get(['additionalInfo']).value,
      approverRemark: this.form.get(['approverRemark']).value,
      createDate: new Date(this.form.get(['createDate']).value),
      updateDate: new Date(this.form.get(['updateDate']).value),
      createdBy: this.form.get(['createdBy']).value,
      updatedBy: this.form.get(['updatedBy']).value,
      assetId: this.form.get(['assetId']).value,
      locationId: this.form.get(['locationId']).value,
      tenantId: this.form.get(['tenantId']).value,
    };
  }
}
