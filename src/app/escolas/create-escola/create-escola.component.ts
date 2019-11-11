import { ListEscolaComponent } from './../list-escola/list-escola.component';
import { EscolaService } from './../escola.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-escola',
  templateUrl: './create-escola.component.html',
  styleUrls: ['./create-escola.component.css']
})
export class CreateEscolaComponent implements OnInit {
  escola: Escola = new Escola();
  submitted = false;

  constructor(escolaService: EscolaService, router: Router) { }

  ngOnInit() {
  }

  newEscola(): void {
    this.submitted = false;
    this.escola = new Escola();
  }

  save() {
    this.escolaService.createEscola(this.escola)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.aluno = new Empresa();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/ListEscolaComponent']);
  }

}

}
