import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'products', component:ProductListComponent},
    {path: '', pathMatch:'full' ,redirectTo: 'products', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ProductListComponent, ProductDetailComponent]