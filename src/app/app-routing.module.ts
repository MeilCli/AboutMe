import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductsComponent } from "./products/products.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: "" },
  { path: "products", component: ProductsComponent },
  { path: "resume", component: ResumeComponent },
  { path: "pages", loadChildren: "./pages/pages.module#PagesModule" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
