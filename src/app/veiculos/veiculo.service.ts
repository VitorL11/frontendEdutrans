import { Veiculo } from './veiculo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class VeiculoService {

  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getVeiculo(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/veiculos/getVeiculo}/${id}`);
  }

  createEmpresa(veiculo : Veiculo): Observable<any> {
    return this.http.post(`${this.baseUrl}/veiculos/cad-veiculos`, veiculo)
  }

  getEmpresaList(): Observable<any> {
    return this.http.get(`${this.http}/veiculos/list-veiculos`);
  }

  deleteEmpresa(id: number): Observable<any>{
    return this.http.delete(`${this.http}/veiculos/del-veiculos/${id}`);
  }

}
