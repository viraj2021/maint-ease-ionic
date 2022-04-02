import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { Vendor } from '../../../model/vendor.model';

@Injectable({ providedIn: 'root' })
export class VendorService {
  private resourceUrl = ApiService.API_URL + '/vendors';

  constructor(protected http: HttpClient) {}

  create(vendor: Vendor): Observable<HttpResponse<Vendor>> {
    return this.http.post<Vendor>(this.resourceUrl, vendor, { observe: 'response' });
  }

  update(vendor: Vendor): Observable<HttpResponse<Vendor>> {
    return this.http.put(`${this.resourceUrl}/${vendor.id}`, vendor, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<Vendor>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<Vendor[]>> {
    const options = createRequestOption(req);
    return this.http.get<Vendor[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
