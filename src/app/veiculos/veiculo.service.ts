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

  createVeiculo(veiculo : Veiculo): Observable<any> {
    console.log(veiculo.modelo);
    return this.http.post(`${this.baseUrl}/veiculos/cad-veiculos`, veiculo)
  }

  getVeiculoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/veiculos/list-veiculos`);
  }

  deleteVeiculo(id: number): Observable<any> {
    return this.http.delete(`${this.http}/veiculos/del-veiculos/${id}`, {
      responseType: "text"
    });
  }

  updateVeiculo(veiculo: Veiculo): Observable<any> {
    return this.http.put(`${this.baseUrl}/veiculos/upd-veiculos`, veiculo)
  }

}
