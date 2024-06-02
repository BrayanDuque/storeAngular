
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductoComponent } from '@componentes/producto/producto.component';
import { producto } from '@compartido/modelos/producto.models';
import { NavbarComponent } from '@compartido/componentes/navbar/navbar.component';
import { CarritoService } from '@compartido/servicios/carrito.service';
import { ProductosService } from '@compartido/servicios/productos.service';
import { CategoriasService } from '@compartido/servicios/categorias.service';
import { categorias } from '@compartido/modelos/categorias.models';
import { RouterLinkWithHref } from '@angular/router';

//hacemos importacion del componente que vamos a utilizar 
@Component({
    selector: 'app-lista-productos',
    standalone: true,
    templateUrl: './lista-productos.component.html',
    styleUrl: './lista-productos.component.css',
    imports: [ProductoComponent, NavbarComponent, RouterLinkWithHref]
    
})
export default class ListaProductosComponent {
  //se crea una signal de tipo array para guardar todos los productos y con el ciclo for se itera e imprime 
  producto = signal<producto[]>([]);
  categoria = signal<categorias[]>([])
  //esto es la referencia del servicio en cual tenemos que colocar en los componentes que necesitemos 
  private servicioCarrito = inject(CarritoService);
  private servicioProducto = inject(ProductosService);
  private CategoriasService = inject(CategoriasService)
  @Input() item_id?: string;
    ngOnInit() {
      //se crean los metodos por aparte y se dejan solo la invocacion con el fin de que sea más facil de comprender el codigo
      
      this.obtenerCategoria();
    }
    ngOnChanges(changes: SimpleChanges) {
      this.obtenerProducto(); 
    }




 
  addtoCart(event: producto){
    this.servicioCarrito.agregarAlcarrito(event)
  }


  private obtenerProducto (){
     //al iniciar el programa este codigo lo que hace es hacer el llamo a la api para extraer los productos y poderlos utilizar nuevamente en otros componentes 
  this.servicioProducto.obtenerProductos(this.item_id)
  .subscribe({
    next:(producto: producto[]) =>{
      this.producto.set(producto);
    },
    error: () =>{}

    })
  }

  private obtenerCategoria (){
    //al iniciar el programa este codigo lo que hace es hacer el llamo a la api para extraer los productos y poderlos utilizar nuevamente en otros componentes 
 this.CategoriasService.obtenerCategorias()
 .subscribe({
   next:(data) =>{
     this.categoria.set(data);
   },
   error: () =>{}

 })
 }







  
}
