import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [
    {path: ':id', component: ProductDetailComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ProductListComponent, ProductDetailComponent]