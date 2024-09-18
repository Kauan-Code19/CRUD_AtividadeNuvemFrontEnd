import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClotheResponse } from '../../interfaces/clothe-response';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  private endpointClotheUrl = `${environment.apiUrl}clothe`

  constructor(private http: HttpClient) { }

  getAllClothes() : Observable<ClotheResponse[]> {
    const url = `${this.endpointClotheUrl}/get-all`

    return this.http.get<ClotheResponse[]>(url)
  }

  deleteClothe(clotheId: number) : Observable<void> {
    const url = `${this.endpointClotheUrl}/${clotheId}`;
    
    return this.http.delete<void>(url);
  }

  updateClothe
  (
    clotheId: number,
    name: string,
    price: number,
    description: string,
    size: string,
    color: string,
    material: string
  ) : Observable<ClotheResponse> {
    const url = `${this.endpointClotheUrl}/${clotheId}`;
    const data = {name, price, description, size, color, material}

    return this.http.put<ClotheResponse>(url, data)
  }

  createClothe
  (
    name: string,
    price: number,
    description: string,
    size: string,
    color: string,
    material: string
  ) : Observable<ClotheResponse> {
    const url = `${environment.apiUrl}product/clothe`;
    const data = {name, price, description, size, color, material}

    return this.http.post<ClotheResponse>(url, data)
  }
}
