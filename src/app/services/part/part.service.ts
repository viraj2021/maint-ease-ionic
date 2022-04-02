import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { Part } from '../../../model/part.model';

@Injectable({ providedIn: 'root' })
export class PartService {
  private resourceUrl = ApiService.API_URL + '/parts';

  constructor(protected http: HttpClient) {}

  create(part: Part): Observable<HttpResponse<Part>> {
    return this.http.post<Part>(this.resourceUrl, part, { observe: 'response' });
  }

  update(part: Part): Observable<HttpResponse<Part>> {
    return this.http.put(`${this.resourceUrl}/${part.id}`, part, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<Part>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<Part[]>> {
    const options = createRequestOption(req);
    return this.http.get<Part[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
