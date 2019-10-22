import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { DeliverablesComponent } from "./deliverables/deliverables.component";

@NgModule({
  declarations: [PagesComponent, DeliverablesComponent],
  imports: [CommonModule, PagesRoutingModule]
})
export class PagesModule {}
