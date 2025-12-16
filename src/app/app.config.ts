import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import {HomeComponent} from './components/home/HomeComponent';
import {AboutComponent} from './components/about/AboutComponent';
import {ServicesComponent} from './components/services/ServicesComponent';
import {ProductsComponent} from './components/products/ProductsComponent';
import {ContactComponent} from './components/contact/ContactComponent';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  ]
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
