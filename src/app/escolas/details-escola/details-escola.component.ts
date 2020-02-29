import { EscolaService } from './../escola.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Escola } from './../escola';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-escola',
  templateUrl: './details-escola.component.html',
  styleUrls: ['./details-escola.component.css']
})
export class DetailsEscolaComponent implements OnInit {
  id: number;
  escola: Escola;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private escolaService: EscolaService
  ) {}

  ngOnInit() {
    this.escola = new Escola();

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this.escolaService.getEscola(this.id).subscribe(
      data => {
        console.log(data)
        this.escola = data;
      },
      error => console.log(error)
    );
  }

  list() {
    this.router.navigate(["listEscola"]);
  }
}