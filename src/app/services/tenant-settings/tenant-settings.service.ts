import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { TenantSettings } from '../../../model/tenant-settings.model';

@Injectable({ providedIn: 'root' })
export class TenantSettingsService {
  private resourceUrl = ApiService.API_URL + '/tenant-settings';

  constructor(protected http: HttpClient) {}

  create(tenantSettings: TenantSettings): Observable<HttpResponse<TenantSettings>> {
    return this.http.post<TenantSettings>(this.resourceUrl, tenantSettings, { observe: 'response' });
  }

  update(tenantSettings: TenantSettings): Observable<HttpResponse<TenantSettings>> {
    return this.http.put(`${this.resourceUrl}/${tenantSettings.id}`, tenantSettings, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<TenantSettings>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<TenantSettings[]>> {
    const options = createRequestOption(req);
    return this.http.get<TenantSettings[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
