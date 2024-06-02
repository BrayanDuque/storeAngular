import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { producto } from '../modelos/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 private http = inject(HttpClient)
  constructor() {
  }
  obtenerProductos(item_id?:string){
    //con esto se realiza el llamado a la api que vamos a trabajar/utilizar, acá la estamos llamando para que nos devuelva en forma de lista
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    
    if(item_id){
      url.searchParams.set('categoryId', item_id)
    }
    return this.http.get<producto[]>  (`https://api.escuelajs.co/api/v1/products`);

  }
  obtenerUno(id: string){
    return this.http.get<producto>(`https://api.escuelajs.co/api/v1/products/${id}`);

  }
  
}
