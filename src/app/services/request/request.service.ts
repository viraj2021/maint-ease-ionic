import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { Request } from '../../../model/request.model';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private resourceUrl = ApiService.API_URL + '/requests';

  constructor(protected http: HttpClient) {}

  create(request: Request): Observable<HttpResponse<Request>> {
    return this.http.post<Request>(this.resourceUrl, request, { observe: 'response' });
  }

  update(request: Request): Observable<HttpResponse<Request>> {
    return this.http.put(`${this.resourceUrl}/${request.id}`, request, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<Request>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<Request[]>> {
    const options = createRequestOption(req);
    return this.http.get<Request[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
