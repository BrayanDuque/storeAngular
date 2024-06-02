import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { producto } from '@compartido/modelos/producto.models';

// se realiza la importacion de input con la I EN MAYUSCULA, la importacion del output t el evenemitter
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
 //se realiza el llamado del decorador input, se le tiene que dar nombre:tipo=valorpordefecto; además se le añade para que sea requerido ese input
 //el input toma el valor de la interface 
  @Input({required:true}) productos!: producto;


  @Output () agregarAlCarro = new EventEmitter();
  agregarAlCarroControlador(){
    this.agregarAlCarro.emit(this.productos);
   }
}
