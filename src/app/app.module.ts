import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; //trae la clase al archivo
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { ListarProductoComponent } from './pages/productos/listar-producto/listar-producto.component';
import { ListaComponent } from './shared/components/lista/lista.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/productos/detalle-producto/detalle-producto.component';
import { LoginComponent } from './pages/login/login.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TareasComponent,
    NotFoundComponent,
    RegistroComponent,
    CrearProductosComponent,
    ListarProductoComponent,
    ListaComponent,
    ProductosComponent,
    DetalleProductoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '264879683267-spjp2jpn7vqorbodu9n6s7mjgf24rn7l.apps.googleusercontent.com'
          )
        },

      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
