import { NuevoDetalleProductosComponent } from './Vistas/detalleProductos/nuevo-detalle-productos/nuevo-detalle-productos.component';
import { ListarDetalleProductosComponent } from './Vistas/detalleProductos/listar-detalle-productos/listar-detalle-productos.component';
import { NuevoProveedorComponent } from './Vistas/Proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ListarProveedorComponent } from './Vistas/Proveedores/listar-proveedor/listar-proveedor.component';
import { NuevoClienteComponent } from './Vistas/Clientes/nuevo-cliente/nuevo-cliente.component';
import { ListarClienteComponent } from './Vistas/Clientes/listar-cliente/listar-cliente.component';
import { SesionGuard } from './Guard/sesion.guard';
import { MenuComponent } from './Vistas/menu/menu.component';
import { LoginComponent } from './Vistas/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCategoriaComponent } from "./Vistas/Categorias/listar-categoria/ListarCategoriaComponent";
import { ProductosComponent } from './Vistas/productos/productos.component';
import { NosotrosComponent } from './Vistas/nosotros/nosotros.component';
import { ListarUsuarioComponent } from './Vistas/Usuarios/listar-usuario/listar-usuario.component';
import { NuevoUsuarioComponent } from './Vistas/Usuarios/nuevo-usuario/nuevo-usuario.component';
import { ListarProductoresComponent } from './Vistas/Productores/listar-productores/listar-productores.component';
import { NuevoProductoresComponent } from './Vistas/Productores/nuevo-productores/nuevo-productores.component';


const routes: Routes = [
{ path:'login', component:LoginComponent},
{ path:'nosotros', component:NosotrosComponent},
{path:'menu', component:MenuComponent,canActivate:[SesionGuard],children:[


  { path:'listarUsuario', component:ListarUsuarioComponent},
  { path:'nuevoUsuario', component:NuevoUsuarioComponent},
  { path:'editarUsuario/:id', component:NuevoUsuarioComponent},

  { path:'listarCategoria', component:ListarCategoriaComponent},


  { path:'listarProveedor', component:ListarProductoresComponent},

  { path:'editarProveedor/:id', component:NuevoProductoresComponent},

  { path:'listarDetalle', component:ListarDetalleProductosComponent},
  { path:'editarDetalle/:id', component:NuevoDetalleProductosComponent},
  { path:'productos', component:ProductosComponent},
  { path:'nuevoProveedor', component:NuevoProductoresComponent},
  { path:'nuevoDetalle', component:NuevoDetalleProductosComponent},



]},

{path:'**', pathMatch:'full',redirectTo:'nosotros'},
{path:'',pathMatch:'full',redirectTo:'nosotros'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
