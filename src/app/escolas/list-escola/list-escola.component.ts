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
  escola: Escola;
  escolas: Observable<Escola[]>;

  constructor(private Route: ActivatedRoute,
    private router: Router,
    private escolaservice: EscolaService) {

  }

  ngOnInit() {
    this.reloadData();
}
  reloadData(){
    this.escolas = this.escolaservice.getEscolaList();
}
  list(){
    this.router.navigate(['escolas']);
}

deleteEscola(id: number) {
  this.escolaservice.deleteEscola(id).subscribe(
    data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error)
  );
}

detalheEscola(id: number) {
  this.router.navigate(["details", id]);
}
}


