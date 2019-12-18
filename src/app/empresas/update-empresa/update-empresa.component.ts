import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrls: ['./update-empresa.component.css']
})


export class UpdateEmpresaComponent implements OnInit {

  id: number;
  empresa: Empresa;

  constructor(private route: ActivatedRoute,private router: Router, private empresaservice: EmpresaService) { }

  ngOnInit() {
    this.empresa = new Empresa();

    this.id = this.route.snapshot.params['id'];

    this.empresaservice.getEmpresa(this.id)
      .subscribe(data => {
        console.log(data)
        this.empresa = data;
      }, error => console.log(error));
  }

  updateEmpresa() {
    this.empresaservice.updateEmpresa(this.empresa)
    .subscribe(data => console.log(data), error => console.log(error));
    this.empresa = new Empresa();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmpresa();
  }

  gotoList() {
    this.router.navigate(['/listar-empresas']);
  }
}
