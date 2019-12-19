import { ListEmpresaComponent } from './empresas/list-empresa/list-empresa.component';
import { ListLinhaComponent } from './linhas/list-linha/list-linha.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'aluno', pathMatch: 'full' },
  {path: 'list-aluno', component: ListAlunoComponent},
  {path: 'list-empresa', component: ListEmpresaComponent},
  {path: 'list-linha', component: ListLinhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
