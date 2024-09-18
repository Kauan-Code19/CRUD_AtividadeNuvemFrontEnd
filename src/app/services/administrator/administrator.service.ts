import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AdministratorResponse } from '../../interfaces/administrator-response';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  private endpointLoginUrl = `${environment.apiUrl}login`

  constructor(private http: HttpClient) { }

  login(email: string, password: string) : Observable<AdministratorResponse> {
    const data = {email, password}

    return this.http.post<AdministratorResponse>(this.endpointLoginUrl, data)
  }
}
