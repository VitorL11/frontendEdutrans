import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateAlunoComponent } from './alunos/create-aluno/create-aluno.component';
import { ListAlunoComponent } from './alunos/list-aluno/list-aluno.component';
import { UpdateAlunoComponent } from './alunos/update-aluno/update-aluno.component';

import { CreateEmpresaComponent } from './empresas/create-empresa/create-empresa.component';
import { UpdateEmpresaComponent } from './empresas/update-empresa/update-empresa.component';
import { ListEmpresaComponent } from './empresas/list-empresa/list-empresa.component';

import { CreateEscolaComponent } from './escolas/create-escola/create-escola.component';
import { ListEscolaComponent } from './escolas/list-escola/list-escola.component';
import { UpdateEscolaComponent } from './escolas/update-escola/update-escola.component';

import { CreateLinhaComponent } from './linhas/create-linha/create-linha.component';
import { ListLinhaComponent } from './linhas/list-linha/list-linha.component';
import { UpdateLinhaComponent} from './linhas/update-linha/update-linha.component';

import { CreateMotoristaComponent } from './motoristas/create-motorista/create-motorista.component';
import { ListMotoristaComponent } from './motoristas/list-motorista/list-motorista.component';
import { UpdateMotoristaComponent } from './motoristas/update-motorista/update-motorista.component';

import { CreateVeiculoComponent } from './veiculos/create-veiculo/create-veiculo.component';
import { ListVeiculoComponent } from './veiculos/list-veiculo/list-veiculo.component';
import { UpdateVeiculoComponent } from './veiculos/update-veiculo/update-veiculo.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsLinhaComponent } from './linhas/details-linha/details-linha.component';
import { from } from 'rxjs';
import { DetailsAlunoComponent } from './alunos/details-aluno/details-aluno.component';
import { DetailsEmpresaComponent } from './empresas/details-empresa/details-empresa.component';
import { DetailsEscolaComponent } from './escolas/details-escola/details-escola.component';
import { DetailsMotoristaComponent } from './motoristas/details-motorista/details-motorista.component';
import { DetailsVeiculoComponent } from './veiculos/details-veiculo/details-veiculo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Angular Materials

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ListVeiComponent } from './list-vei/list-vei.component';
import { SearchVeiComponent } from './search-vei/search-vei.component';
import { SearchveiPipe } from './pipes/searchvei.pipe';




@NgModule({
  declarations: [
    AppComponent,

    CreateAlunoComponent,
    ListAlunoComponent,
    UpdateAlunoComponent,
    DetailsAlunoComponent,

    CreateEmpresaComponent,
    ListEmpresaComponent,
    UpdateEmpresaComponent,
    DetailsEmpresaComponent,

    CreateEscolaComponent,
    ListEscolaComponent,
    UpdateEscolaComponent,
    DetailsEscolaComponent,

    CreateLinhaComponent,
    ListLinhaComponent,
    UpdateLinhaComponent,
    DetailsLinhaComponent,

    CreateMotoristaComponent,
    ListMotoristaComponent,
    UpdateMotoristaComponent,
    DetailsMotoristaComponent,

    CreateVeiculoComponent,
    ListVeiculoComponent,
    UpdateVeiculoComponent,
    DetailsVeiculoComponent,
    ListVeiComponent,
    SearchVeiComponent,
    SearchveiPipe,

  ],

  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
