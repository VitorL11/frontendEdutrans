import { EscolaService } from './../escola.service';
import {Escola} from './../escola';
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

  constructor(private escolaservice: EscolaService,
    private router: Router) { }

  ngOnInit() {
  }

  newEscola(): void {
    this.submitted = false;
    this.escola = new Escola();
  }

  save() {
    this.escolaservice.createEscola(this.escola)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.escola = new Escola();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/escolas']);
  }

}
