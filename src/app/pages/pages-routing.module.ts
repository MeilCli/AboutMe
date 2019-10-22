import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DeliverablesComponent } from "./deliverables/deliverables.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [{ path: "deliverables", component: DeliverablesComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
