import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgChartsModule } from "ng2-charts";
import { MarkdownModule } from "ngx-markdown";

import { AppRoutingModule } from "./app-routing.module";

import { ProductService } from "./services/product.service";
import { SkillService } from "./services/skill.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { TopCardComponent } from "./components/top-card/top-card.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductsComponent } from "./products/products.component";
import { ResumeComponent } from "./resume/resume.component";
import { SkillChartComponent } from "./components/skill-chart/skill-chart.component";
import { TimelineService } from "./services/timeline.service";
import { AboutComponent } from "./about/about.component";
import { ProductComponent } from "./products/product/product.component";
import { GaService } from "./services/ga.service";
import { PrivacyComponent } from "./privacy/privacy.component";
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        FooterComponent,
        TopCardComponent,
        ProductCardComponent,
        ProductsComponent,
        ResumeComponent,
        SkillChartComponent,
        AboutComponent,
        ProductComponent,
        PrivacyComponent,
        ProductFilterPipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        FontAwesomeModule,
        FormsModule,
        NgChartsModule,
        MarkdownModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [GaService, ProductService, SkillService, TimelineService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
