import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { CustomFields } from '../../../model/custom-fields.model';

@Injectable({ providedIn: 'root' })
export class CustomFieldsService {
  private resourceUrl = ApiService.API_URL + '/custom-fields';

  constructor(protected http: HttpClient) {}

  create(customFields: CustomFields): Observable<HttpResponse<CustomFields>> {
    return this.http.post<CustomFields>(this.resourceUrl, customFields, { observe: 'response' });
  }

  update(customFields: CustomFields): Observable<HttpResponse<CustomFields>> {
    return this.http.put(`${this.resourceUrl}/${customFields.id}`, customFields, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<CustomFields>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<CustomFields[]>> {
    const options = createRequestOption(req);
    return this.http.get<CustomFields[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
