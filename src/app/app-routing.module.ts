import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductsComponent } from "./products/products.component";
import { ResumeComponent } from "./resume/resume.component";
import { AboutComponent } from "./about/about.component";
import { ProductComponent } from "./products/product/product.component";
import { PrivacyComponent } from "./privacy/privacy.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", redirectTo: "" },
  { path: "products", component: ProductsComponent },
  { path: "products/:id", component: ProductComponent },
  { path: "resume", component: ResumeComponent },
  { path: "about", component: AboutComponent },
  { path: "privacy", component: PrivacyComponent },
  { path: "pages", loadChildren: "./pages/pages.module#PagesModule" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
