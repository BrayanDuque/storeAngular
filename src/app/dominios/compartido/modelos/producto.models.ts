import { categorias } from "./categorias.models";

export interface producto{
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    fecha: string,
    categoria: categorias
    
}