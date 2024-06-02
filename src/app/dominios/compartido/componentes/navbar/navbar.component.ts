import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { producto } from '../../modelos/producto.models';

import { CarritoService } from '../../servicios/carrito.service';
import { RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //se crea una señar la cual tiene valor true para mostrar el carro
  mostarCarrito = signal(true);
  //se crea una variable privada del servicio para injectarla y poderla utilizar, se asigna sus respetivas variables, además del metodo sumar el total, esto se puede ya que contiene dos o más señales
  private servicioCarrito = inject(CarritoService)
  carrito = this.servicioCarrito.carrito;
  total = this.servicioCarrito.total;

  //se crea un metodo para negar el estado y poder abrir y cerrar, por ultimo se coloca en el html en los botones correspondientes y se le agrega la clase dinimica en este caso translate-x-full
  toogleMostrarCarrito (){
    this.mostarCarrito.update(prevState => !prevState)
  }
 
}
