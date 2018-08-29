import { TeamService } from './team.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthguardService } from './authguard.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule } from 'angularfire2/auth';
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule } from 'angular5-data-table';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyordersComponent } from './myorders/myorders.component';
import { UserService } from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import { IplComponent } from './ipl/ipl.component'

// import { BdNavbarComponent } from './bd-navbar/bd-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    MyordersComponent,
    ProductFormComponent,
    IplComponent
    
    
    // BdNavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '' , component:HomeComponent},
      {path:'products',component:ProductsComponent },
      {path:'shopping-cart', component: ShoppingCartComponent},
      {path:'login', component: LoginComponent},
      {
        path: 'ipl/teams' ,
        component: IplComponent
      },

      {path:'my/orders', component: MyordersComponent , canActivate: [AuthguardService]},
      {path:'check-out', component:CheckOutComponent, canActivate: [AuthguardService]},
      {path:'order-success', component: OrderSuccessComponent , canActivate: [AuthguardService]},
      {
        path: 'admin/products/new' ,
        component: ProductFormComponent ,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products/:id' ,
        component: ProductFormComponent ,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/products' ,
        component: AdminProductsComponent ,
        canActivate: [AuthguardService, AdminAuthGuardService]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent ,
        canActivate: [AuthguardService, AdminAuthGuardService]
      }
      
    ])
  ],
  providers: [
    AuthService,
    AuthguardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
