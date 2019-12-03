import { Aluno } from './aluno';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AlunoService {
<<<<<<< HEAD



  private baseUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getAluno(id : number): Observable<any> {
    return this.http.get(`${this.baseUrl}/alunos/getAluno}/${id}`);
  }

  createAluno(aluno : Aluno): Observable<any> {
    return this.http.post(`${this.baseUrl}/alunos/cad-aluno`, aluno)
  }

  getAlunoList(): Observable<any> {
    return this.http.get(`${this.http}/alunos/list-aluno`);
  }

  deleteAluno(id: number): Observable<any>{
    return this.http.delete(`${this.http}/alunos/del-aluno/${id}`);
  }




=======
	createAluno(aluno: any) {
		throw new Error('Method not implemented.');
	}

	getAlunoList() {}

	constructor() {}
>>>>>>> 84e7a420f8ff739abe998af218999b136cb2946c
}
