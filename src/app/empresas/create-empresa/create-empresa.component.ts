import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.css']
})
export class CreateEmpresaComponent implements OnInit {
  empresa: Empresa = new Empresa();
  submitted = false;

  constructor(private empresaService: EmpresaService, router: Router) { }

  ngOnInit() {
  }
  newEmpresa(): void {
    this.submitted = false;
    this.empresa = new Empresa();
  }

  save() {
    this.empresaService.createEmpresa(this.empresa)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.empresa = new Empresa();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/ListEmpresaComponent']);
  }

}

}
