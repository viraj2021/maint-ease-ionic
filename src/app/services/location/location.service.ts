import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { Location } from '../../../model/location.model';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private resourceUrl = ApiService.API_URL + '/locations';

  constructor(protected http: HttpClient) {}

  create(location: Location): Observable<HttpResponse<Location>> {
    return this.http.post<Location>(this.resourceUrl, location, { observe: 'response' });
  }

  update(location: Location): Observable<HttpResponse<Location>> {
    return this.http.put(`${this.resourceUrl}/${location.id}`, location, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<Location>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<Location[]>> {
    const options = createRequestOption(req);
    return this.http.get<Location[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
