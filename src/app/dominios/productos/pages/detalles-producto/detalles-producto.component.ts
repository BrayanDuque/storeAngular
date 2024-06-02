import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { producto } from '@compartido/modelos/producto.models';
import { CarritoService } from '@compartido/servicios/carrito.service';
import { ProductosService } from '@compartido/servicios/productos.service';

@Component({
  selector: 'app-detalles-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-producto.component.html',
  styleUrl: './detalles-producto.component.css'
})
export default class DetallesProductoComponent {
  //llamamos al servicio del producto
  private ProductosService = inject(ProductosService)
  private CarritoService = inject(CarritoService)

  @Input() id?:string
  //el producto puede llegar en forma de producto o por defecto nulo, y se coloca como parametro null
  producto = signal<producto | null>(null)
  cover = signal("")
  ngOnInit() {

    if(this.id){

      this.ProductosService.obtenerUno(this.id)
      .subscribe({
        next: (producto)=>{
          this.producto.set(producto);
          if(producto.images.length > 0){
            this.cover.set(producto.images[0])
          }
        }
      })
    }
    
  }

  changeCover (newImg : string){
    this.cover.set(newImg);
  }

  obtenerCarrito (){
    //se crea una constante del producto 
    const producto = this.producto();
    //se realiza la validacion si el producto existe
    if(producto){
      //se realiza el metodo para agregar al carrito el articulo/producto 
      this.CarritoService.agregarAlcarrito(producto)
    }
  }



}
