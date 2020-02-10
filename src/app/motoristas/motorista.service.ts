import { Motorista } from './motorista';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class MotoristaService {

  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getMotorista(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/motoristas/details-motorista/${id}`);
  }

  createMotorista(motorista: Motorista): Observable<any> {
    console.log(motorista.nome);
    return this.http.post(`${this.baseUrl}/motoristas/cad-motoristas`, motorista);
  }

  getMotoristaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/motoristas/list-motoristas/`);
  }

  deleteMotorista(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/motoristas/del-motoristas/${id}`, {
      responseType: "text"
    });
  }

  updateMotorista(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/motoristas/upd-motoristas/${id}`, value);
  }
}
