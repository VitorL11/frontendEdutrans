import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchalu'
})
export class SearchaluPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    console.log(lista);
     if(!texto) return lista
     //console.log(lista.filter(user => user.name.toUpperCase().includes(texto.toUpperCase)))
     return lista.filter(user => user.nome.toUpperCase().includes(texto.toUpperCase()))

   }


}
