import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAlunoComponent } from './alunos/create-aluno/create-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import { UpdateAlunoComponent } from './alunos/update-aluno/update-aluno.component';
import { DetailsAlunoComponent } from './alunos/details-aluno/details-aluno.component';

import { CreateEmpresaComponent } from './empresas/create-empresa/create-empresa.component';
import { ListEmpresaComponent } from './empresas/list-empresa/list-empresa.component';
import { UpdateEmpresaComponent } from './empresas/update-empresa/update-empresa.component';
import { DetailsEmpresaComponent } from './empresas/details-empresa/details-empresa.component';

import { CreateEscolaComponent } from './escolas/create-escola/create-escola.component';
import { ListEscolaComponent } from './escolas/list-escola/list-escola.component';
import { UpdateEscolaComponent } from './escolas/update-escola/update-escola.component';
import { DetailsEscolaComponent } from './escolas/details-escola/details-escola.component';

import { CreateLinhaComponent } from './linhas/create-linha/create-linha.component';
import { ListLinhaComponent } from './linhas/list-linha/list-linha.component';
import { UpdateLinhaComponent } from './linhas/update-linha/update-linha.component';
import { DetailsLinhaComponent } from './linhas/details-linha/details-linha.component';

import { CreateMotoristaComponent } from './motoristas/create-motorista/create-motorista.component';
import { ListMotoristaComponent } from './motoristas/list-motorista/list-motorista.component';
import { UpdateMotoristaComponent } from './motoristas/update-motorista/update-motorista.component';
import { DetailsMotoristaComponent } from './motoristas/details-motorista/details-motorista.component';

import { CreateVeiculoComponent } from './veiculos/create-veiculo/create-veiculo.component';
import { ListVeiculoComponent } from './veiculos/list-veiculo/list-veiculo.component';
import { UpdateVeiculoComponent } from './veiculos/update-veiculo/update-veiculo.component';
import { DetailsVeiculoComponent } from './veiculos/details-veiculo/details-veiculo.component';

import { BuscarComponent } from './MotVei/buscar/buscar.component';


const routes: Routes = [
  //{path: '', redirectTo: 'aluno', pathMatch: 'full' },
  {path: 'alunos', component: CreateAlunoComponent},
  {path: 'listAluno', component: ListAlunoComponent},
  {path: 'updateAluno/:id', component: UpdateAlunoComponent},
  {path: 'detailsAluno/:id', component: DetailsAlunoComponent},

  {path: 'empresas', component: CreateEmpresaComponent},
  {path: 'listEmpresa', component: ListEmpresaComponent},
  {path: 'updateEmpresa/:id', component: UpdateEmpresaComponent},
  {path: 'detailsEmpresa/:id', component: DetailsEmpresaComponent},

  {path: 'escolas', component: CreateEscolaComponent},
  {path: 'listEscola', component: ListEscolaComponent},
  {path: 'updateEscola/:id', component: UpdateEscolaComponent},
  {path: 'detailsEscola/:id', component: DetailsEscolaComponent},

  {path: 'linhas', component: CreateLinhaComponent},
  {path: 'listLinha', component: ListLinhaComponent},
  {path: 'updateLinha/:id', component: UpdateLinhaComponent},
  {path: 'detailsLinha/:id', component: DetailsLinhaComponent},

  {path: 'motoristas', component: CreateMotoristaComponent},
  {path: 'listMotorista', component: ListMotoristaComponent},
  {path: 'updateMotorista/:id', component: UpdateMotoristaComponent},
  {path: 'detailsMotorista/:id', component: DetailsMotoristaComponent},

  {path: 'veiculos', component: CreateVeiculoComponent},
  {path: 'listVeiculo', component: ListVeiculoComponent},
  {path: 'updateVeiculo/:id', component: UpdateVeiculoComponent},
  {path: 'detailsVeiculo/:id', component: DetailsVeiculoComponent},

  {path: 'buscar', component: BuscarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
