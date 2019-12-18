import { Empresa } from './../empresa';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from './../empresa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-empresa',
  templateUrl: './list-empresa.component.html',
  styleUrls: ['./list-empresa.component.css']
})
export class ListEmpresaComponent implements OnInit {


  empresa: Empresa;


  constructor(private route: ActivatedRoute, private router: Router,
    private empresaservice: EmpresaService) {

  }


  ngOnInit() {
    this.empresa = new Empresa();

    this.empresa.id = this.route.snapshot.params['id'];
    this.empresaservice.getEmpresa(this.empresa.id)
    .subscribe(data=> {
      console.log(data)
      this.empresa = data;
    }, error=> console.log(error));

  }

list(){
  this.router.navigate(['empresas'])
}
}


