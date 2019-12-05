import { EscolaService } from './../escola.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router"
import { Escola } from '../escola';

@Component({
  selector: 'app-update-escola',
  templateUrl: './update-escola.component.html',
  styleUrls: ['./update-escola.component.css']

})

export class UpdateEscolaComponent implements OnInit {
  id: number;
  escola: Escola;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private escolaservice: EscolaService) { }

  ngOnInit() {

this.escola = new Escola();

this.id = this.route.snapshot.params['id'];

this.escolaservice.getEscola(this.id)
      .subscribe(data => {
        console.log(data)
        this.escola = data;
      }, error => console.log(error));
  }


updateEscola() {
    this.escolaservice.updateEscola(this.escola)
      .subscribe(data => console.log(data), error => console.log(error));
    this.escola = new Escola();
    this.gotoList();
  }

onSubmit() {
    this.updateEscola();
    this.submitted = true;
    this.gotoList();
  }

gotoList() {
    this.router.navigate(['/listar-escola']);
  }

}
