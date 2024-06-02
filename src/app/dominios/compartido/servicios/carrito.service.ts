import { Injectable, computed, signal } from '@angular/core';
import { producto } from '../modelos/producto.models';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
//los servicios ayuda a la comunicacion entre componentes en un proyecto angular 
//se crea una variable y la convertimos en signal de tipo array.
  carrito = signal<producto[]>([])
  //ya que tenemos el signal podemos utilizar el computed para crear un signal de otro signal y así mismo realizar la operacion de sumar el total de los productos del carrito 
  total = computed(()=>{
    const carrito = this.carrito();
    return carrito.reduce((total, producto) => total + producto.price, 0 )
  })
  constructor() { }
// se realiza el proceos de crear una signal de otra signal 
  agregarAlcarrito(producto:producto){
    this.carrito.update(state => [...state, producto]);
  }
}
