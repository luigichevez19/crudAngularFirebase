import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireAuthModule } from '@angular/fire/auth';

// components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';


// service
import { ProductService } from './services/product.service';
import { EmpleadoService } from './services/empleado.service';
import { ReporteService } from './services/reporte.service';

// Toastr, para notificaciones en angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoListaComponent } from './components/empleados/empleado-lista/empleado-lista.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReportesListaComponent } from './components/empleados/reportes-lista/reportes-lista.component';
import { ReportesComponent } from './components/empleados/reportes/reportes.component';

const routes: Routes = [
  { path: '', redirectTo: '/Error', pathMatch: 'full' },
  { path: 'Error', component: ProductsComponent },
  { path: 'empleado', component: EmpleadosComponent }
 ];
 
 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    EmpleadosComponent,
    EmpleadoListaComponent,
    EmpleadoComponent,
    ReporteComponent,
    ReportesListaComponent,
    ReportesComponent
  ],
  imports: [  // Se importan todas las dependencias, para utilizarlos en todo el proyecto. 
    BrowserModule,   
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],exports: [RouterModule],
  providers: [ // El servicio se configura global, para utilizarlos en todo el proyecto. 
    ProductService,
    EmpleadoService,
    ReporteService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
