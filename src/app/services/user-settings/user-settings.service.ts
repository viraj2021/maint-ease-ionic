import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api/api.service';
import { createRequestOption } from '../../shared';
import { UserSettings } from '../../../model/user-settings.model';

@Injectable({ providedIn: 'root' })
export class UserSettingsService {
  private resourceUrl = ApiService.API_URL + '/user-settings';

  constructor(protected http: HttpClient) {}

  create(userSettings: UserSettings): Observable<HttpResponse<UserSettings>> {
    return this.http.post<UserSettings>(this.resourceUrl, userSettings, { observe: 'response' });
  }

  update(userSettings: UserSettings): Observable<HttpResponse<UserSettings>> {
    return this.http.put(`${this.resourceUrl}/${userSettings.id}`, userSettings, { observe: 'response' });
  }

  find(id: string): Observable<HttpResponse<UserSettings>> {
    return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<HttpResponse<UserSettings[]>> {
    const options = createRequestOption(req);
    return this.http.get<UserSettings[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
