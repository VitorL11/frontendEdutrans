import { Aluno } from './aluno';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AlunoService {

  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getAluno(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alunos/details-aluno/${id}`);
  }

  createAluno(aluno: Aluno): Observable<any> {
    //console.log(aluno.nome);
    return this.http.post(`${this.baseUrl}/alunos/cad-alunos`, aluno);
  }

  getAlunoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/alunos/list-alunos/`);
  }

  deleteAluno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/alunos/del-alunos/${id}`, {
      responseType: "text"
    });
  }

  updateAluno(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/alunos/upd-alunos/${id}`, value);
  }

  queryAluno(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alunos/details-aluno-linha/${id}`);
  }
}

