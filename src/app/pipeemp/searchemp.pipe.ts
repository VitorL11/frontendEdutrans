import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchemp'
})
export class SearchempPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    console.log(lista);
     if(!texto) return lista
     return lista.filter(user => user.razao_social.toUpperCase().includes(texto.toUpperCase()))

   }


}
