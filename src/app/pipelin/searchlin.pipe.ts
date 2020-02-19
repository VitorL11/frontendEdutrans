import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchlin'
})
export class SearchlinPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    //console.log(lista);
     if(!texto) return lista
     return lista.filter(user => user.nome_linha.toUpperCase().includes(texto.toUpperCase()))

   }


}
