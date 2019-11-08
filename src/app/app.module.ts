import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserirComponent } from './alunos/inserir/inserir.component';
import { RemoveComponent } from './aluno/remove/remove.component';
import { UpdateComponent } from './alunos/update/update.component';
import { ListarComponent } from './alunos/listar/listar.component';
import { DeleteComponent } from './alunos/delete/delete.component';
import { CreateAlunoComponent } from './alunos/create-aluno/create-aluno.component';
import { DeleteAlunoComponent } from './alunos/delete-aluno/delete-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import { UpdateAlunoComponent } from './alunos/update-aluno/update-aluno.component';
import { CreateEmpresaComponent } from './empresas/create-empresa/create-empresa.component';
import { DeleteEmpresaComponent } from './empresas/delete-empresa/delete-empresa.component';
import { UpdateEmpresaComponent } from './empresas/update-empresa/update-empresa.component';
import { ListEmpresaComponent } from './empresas/list-empresa/list-empresa.component';
import { CreateEscolaComponent } from './escolas/create-escola/create-escola.component';
import { DeleteEscolaComponent } from './escolas/delete-escola/delete-escola.component';
import { ListEscolaComponent } from './escolas/list-escola/list-escola.component';
import { UpdateEscolaComponent } from './escolas/update-escola/update-escola.component';
import { CreateLinhaComponent } from './linhas/create-linha/create-linha.component';
import { DeleteLinhaComponent } from './linhas/delete-linha/delete-linha.component';
import { ListLinhaComponent } from './linhas/list-linha/list-linha.component';
import { UpdateLinhaComponent } from './linhas/update-linha/update-linha.component';
import { CreateMotoristaComponent } from './motoristas/create-motorista/create-motorista.component';
import { DeleteMotoristaComponent } from './motoristas/delete-motorista/delete-motorista.component';
import { UpdateMotoristaComponent } from './motoristas/update-motorista/update-motorista.component';
import { ListMotoristaComponent } from './motoristas/list-motorista/list-motorista.component';
import { CreateVeiculoComponent } from './veiculos/create-veiculo/create-veiculo.component';
import { DeleteVeiculoComponent } from './veiculos/delete-veiculo/delete-veiculo.component';
import { ListVeiculoComponent } from './veiculos/list-veiculo/list-veiculo.component';
import { UpdateVeiculoComponent } from './veiculos/update-veiculo/update-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    InserirComponent,
    RemoveComponent,
    UpdateComponent,
    ListarComponent,
    DeleteComponent,
    CreateAlunoComponent,
    DeleteAlunoComponent,
    ListAlunoComponent,
    UpdateAlunoComponent,
    CreateEmpresaComponent,
    DeleteEmpresaComponent,
    UpdateEmpresaComponent,
    ListEmpresaComponent,
    CreateEscolaComponent,
    DeleteEscolaComponent,
    ListEscolaComponent,
    UpdateEscolaComponent,
    CreateLinhaComponent,
    DeleteLinhaComponent,
    ListLinhaComponent,
    UpdateLinhaComponent,
    CreateMotoristaComponent,
    DeleteMotoristaComponent,
    UpdateMotoristaComponent,
    ListMotoristaComponent,
    CreateVeiculoComponent,
    DeleteVeiculoComponent,
    ListVeiculoComponent,
    UpdateVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
