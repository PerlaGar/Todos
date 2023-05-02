import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { GaleriaComponent } from './pages/galeria/galeria.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component'
import { ListarProductoComponent } from './pages/productos/listar-producto/listar-producto.component'
import { DetalleProductoComponent } from './pages/productos/detalle-producto/detalle-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { NoauthGuard } from './shared/guards/noauth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'tareas', pathMatch:'full'},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'tareas', component: TareasComponent, canActivate: [AuthGuard]/*, data:{['admi', 'manager']}*/}, //puede haber mas de un guardia como para comprobar el rol del usuario
  {path: 'registro', component: RegistroComponent, canActivate:[NoauthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'productos', component:ProductosComponent, children:[
    {path: '', component: ListarProductoComponent},
    {path: 'crear', component: CrearProductosComponent},
    {path: ':id', component: DetalleProductoComponent}
  ]},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],//esto trae todo lo que tenemos y con esto se carga
})
export class AppRoutingModule { }
