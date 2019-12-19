import { ListLinhaComponent } from './../list-linha/list-linha.component';
import { Linha } from './../linha';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LinhaService } from '../linha.service';

@Component({
  selector: 'app-create-linha',
  templateUrl: './create-linha.component.html',
  styleUrls: ['./create-linha.component.css']
})
export class CreateLinhaComponent implements OnInit {

    linha: Linha = new Linha();
    submitted = false;

    constructor(private linhaservice: LinhaService, private router: Router) { }

    ngOnInit() {
    }

    newLinha(): void {
      this.submitted = false;
      this.linha = new Linha();
    }

    save() {
      this.linhaservice.createLinha(this.linha)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
      this.linha = new Linha();


      this.gotoList();
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList() {

      this.router.navigate(['/ListLinhaComponent']);
    }

  }
