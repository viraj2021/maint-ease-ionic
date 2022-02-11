import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { VendorType } from '../../../model/vendor-type.model';

@Injectable({ providedIn: 'root' })
export class VendorTypeService {
  private resourceUrl = ApiService.API_URL + '/vendor-types';

  constructor(protected http: HttpClient) {}

  create(vendorType: VendorType): Observable<HttpResponse<VendorType>> {
    return this.http.post<VendorType>(this.resourceUrl, vendorType, { observe: 'response' });
  }

  update(vendorType: VendorType): Observable<HttpResponse<VendorType>> {
    return this.http.put(`${this.resourceUrl}/${vendorType.id}`, vendorType, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<VendorType>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<VendorType[]>> {
    const options = createRequestOption(req);
    return this.http.get<VendorType[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
