import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EscolaService } from './../escola.service';
import { Escola } from './../escola';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-escola',
  templateUrl: './list-escola.component.html',
  styleUrls: ['./list-escola.component.css']
})
export class ListEscolaComponent implements OnInit {

  escolas: Escola;


  constructor(private Route: ActivatedRoute, private router: Router,
              private escolaservice: EscolaService) {

  }

  ngOnInit() {
    this.escolas = new Escola();

    this.escolas.id = this.Route.snapshot.params['id'];
    this.escolaservice.getEscola(this.escolas.id)
    .subscribe(data=> {
      console.log(data)
      this.escolas = data;
    }, error=> console.log(error));


}
  List(){
    this.router.navigate(['escolas'])
  }

}


