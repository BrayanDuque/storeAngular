import { Routes } from '@angular/router';
import  { NotFoundComponent } from './dominios/info/pages/not-found/not-found.component';
import { LayautComponent } from '@compartido/componentes/layaut/layaut.component';


export const routes: Routes = [
    {
        path: "",
        component: LayautComponent,
        children : [
            {
                //le damos a entender a angular que esta será nuestra pagina de inicio
                path: "",
                //enlazamos el componente, con loadcomponent lo hacemos es asegurar de que el archivo no sea pesdoy optimice el peso
                loadComponent: ()=> import('./dominios/productos/pages/lista-productos/lista-productos.component')
            },
            {
                //para enrutar una pagina con parametros que nos suministras desde la api 
                path:'producto/:id',
                loadComponent: ()=> import('./dominios/productos/pages/detalles-producto/detalles-producto.component')
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
