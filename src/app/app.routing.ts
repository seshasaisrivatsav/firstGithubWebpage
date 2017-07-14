import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LandingPageComponent} from "./landing-page/landing-page.component";


const APP_ROUTES : Routes = [
  {path: '', component : LandingPageComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
