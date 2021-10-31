import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../interfaces/cliente';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista: Cliente[], texto: string, nomColumna: string): Cliente[] {
    if (!texto) return lista
    texto = texto.toLowerCase()
    return lista.filter(cliente => cliente[nomColumna].toLowerCase().includes(texto))
  }

}
