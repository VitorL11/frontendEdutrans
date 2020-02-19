import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';

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


// Angular Materials -> Campo de Busca //

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { SearchAluComponent } from './search-alu/search-alu.component';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { SearchLinComponent } from './search-lin/search-lin.component';
import { SearchVeiComponent } from './search-vei/search-vei.component';
import { SearchMotComponent } from './search-mot/search-mot.component';

import { SearchaluPipe } from './pipealu/searchalu.pipe';
import { SearchempPipe } from './pipeemp/searchemp.pipe';
import { SearchlinPipe } from './pipelin/searchlin.pipe';
import { SearchmotPipe } from './pipemot/searchmot.pipe';
import { SearchveiPipe } from './pipevei/searchvei.pipe';


// Smart Table
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SearchEscComponent } from './search-esc/search-esc.component';
import { SearchescPipe } from './pipeesc/searchesc.pipe';




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

    SearchAluComponent,
    SearchEmpComponent,
    SearchLinComponent,
    SearchMotComponent,
    SearchVeiComponent,

    SearchaluPipe,
    SearchempPipe,
    SearchlinPipe,
    SearchmotPipe,
    SearchveiPipe,
    SearchEscComponent,
    SearchescPipe



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
    FormsModule,
    Ng2SmartTableModule,
    NgxPaginationModule

  ],

  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule { }
