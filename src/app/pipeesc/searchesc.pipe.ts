import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchesc'
})
export class SearchescPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    console.log(lista);
     if(!texto) return lista
     return lista.filter(user => user.nome.toUpperCase().includes(texto.toUpperCase()))

   }


}
