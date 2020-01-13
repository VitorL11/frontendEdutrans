import { Linha } from "./linha";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  // tslint:disable-next-line: indent
  providedIn: "root"
})
export class LinhaService {
  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getLinha(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/linhas/getLinha}/${id}`);
  }

  createLinha(linha: Linha): Observable<any> {
    console.log(linha.nome);
    return this.http.post(`${this.baseUrl}/linhas/cad-linhas`, linha);
  }

  getLinhaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/linhas/list-linhas/`);
  }

  deleteLinha(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/linhas/del-linhas/${id}`, {
      responseType: "text"
    });
  }

  updateLinha(linha: Linha): Observable<any> {
    return this.http.put(`${this.baseUrl}/linhas/upd-linhas`, linha);
  }
}
