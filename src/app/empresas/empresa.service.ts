import { Empresa } from './empresa';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EmpresaService {



  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getEmpresa(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/empresas/getEmpresa}/${id}`);
  }

  createEmpresa(empresa : Empresa): Observable<any> {
    return this.http.post(`${this.baseUrl}/empresas/cad-empresas`, empresa)
  }

  getEmpresaList(): Observable<any> {
    return this.http.get(`${this.http}/empresas/list-empresas`);
  }

  deleteEmpresa(id: number): Observable<any>{
    return this.http.delete(`${this.http}/empresas/del-empresas/${id}`);
  }

}
