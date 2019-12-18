import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LinhaService } from './../linha.service';
import { Linha } from './../linha';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-linha',
  templateUrl: './list-linha.component.html',
  styleUrls: ['./list-linha.component.css']
})
export class ListLinhaComponent implements OnInit {


  linhas:Linha;

  constructor(private Route: ActivatedRoute, private router: Router,
              private linhaservice: LinhaService) {

  }

  ngOnInit() {
    this.linhas = new Linha();

    this.linhas.id = this.Route.snapshot.params['id'];
    this.linhaservice.getLinha(this.linhas.id)
    .subscribe(data=> {
      console.log(data)
      this.linhas = data;
    }, error=> console.log(error));

}

list(){
  this.router.navigate(['linhas'])
}

}


