import { EmpresaService } from './../empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-details-empresa',
  templateUrl: './details-empresa.component.html',
  styleUrls: ['./details-empresa.component.css']
})
export class DetailsEmpresaComponent implements OnInit {
  id: number;
  empresa: Empresa;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService
  ) {}

  ngOnInit() {
    this.empresa = new Empresa();

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this.empresaService.getEmpresa(this.id).subscribe(
      data => {
        console.log(data)
        this.empresaService = data;
      },
      error => console.log(error)
    );
      console.log(this.empresa.nome_dono)
    this.empresa.nome_dono = 'yteste';
  }

  list() {
    this.router.navigate(["listEmpresa"]);
  }
}
