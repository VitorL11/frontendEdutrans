import { ListLinhaComponent } from './../list-linha/list-linha.component';
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

  constructor(linhaservice: LinhaService, Router: Router) { }

  ngOnInit() {
    newLinha(): void {
      this.submitted = false;
      this.linha = new Linha();
    }

    save() {
      this.linhaService.createLinha(this.linha)
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
      this.gotoList();
    }

    gotoList() {
      this.router.navigate(['/ListLinhaComponent']);
    }

}



