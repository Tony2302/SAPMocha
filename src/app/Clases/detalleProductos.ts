import { Productores } from './productores';
import { Productos } from './productos';
export interface detalleCategorias{

idDetalleCategorias :number;
stock:number;
precioUnidad:number;
//precioDocena:number;
entrega:number;
idProductos:Productos;
productos:Productos;
idProductores:number;
productores:Productores;

}
