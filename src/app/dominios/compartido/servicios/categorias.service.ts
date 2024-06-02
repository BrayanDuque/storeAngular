import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categorias } from '@compartido/modelos/categorias.models';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private http = inject(HttpClient)
  constructor() { }
  obtenerCategorias(){
    //con esto se realiza el llamado a la api que vamos a trabajar/utilizar, acá la estamos llamando para que nos devuelva en forma de lista
    return this.http.get<categorias[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
}
