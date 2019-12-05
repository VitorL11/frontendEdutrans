import { Escola } from './escola';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class EscolaService {

  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getEscola(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/escolas/getEscola}/${id}`);
  }

  createEscola(escola : Escola): Observable<any> {
    return this.http.post(`${this.baseUrl}/escolas/cad-escolas`, escola)
  }

  getEscolaList(): Observable<any> {
    return this.http.get(`${this.http}/escolas/list-escolas`);
  }

  deleteEscola(id: number): Observable<any>{
    return this.http.delete(`${this.http}/escolas/del-escolas/${id}`);
  }

  updateEscola(escola: Escola): Observable<any> {
    return this.http.put(`${this.baseUrl}/escolas/upd-escolas`, escola)
  }

}
