import { Empresa } from './empresa';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // tslint:disable-next-line: indent
	providedIn: 'root'
})
export class EmpresaService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getEmpresa(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/empresas/details-empresas/${id}`);
  }

  createEmpresa(empresa: Empresa): Observable<any> {
    console.log(empresa.nome);
    return this.http.post(`${this.baseUrl}/empresas/cad-empresas`, empresa);
  }

  getEmpresaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/empresas/list-empresas/`);
  }

  deleteEmpresa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/empresas/del-empresas/${id}`, {
      responseType: "text"
    });
  }

  updateEmpresa(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/empresas/upd-empresas/${id}`, value);
  }
}
