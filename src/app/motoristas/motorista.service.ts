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

  getMotorista(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/motoristas/getMotorista}/${id}`);
  }

  createMotorista(motorista : Motorista): Observable<any> {
    return this.http.post(`${this.baseUrl}/motoristas/cad-motoristas`, motorista)
  }

  getMotoristaList(): Observable<any> {
    return this.http.get(`${this.http}/motoristas/list-motoristas`);
  }

  deleteMotorista(id: number): Observable<any>{
    return this.http.delete(`${this.http}/motoristas/del-motoristas/${id}`);
  }

  updateMotorista(motorista: Motorista): Observable<any> {
    return this.http.put(`${this.baseUrl}/motoristas/upd-motoristas`, motorista)
  }

}
