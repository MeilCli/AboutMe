import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  markdown: string;
  notFound: boolean;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const { snapshot } = this.route;
    if (snapshot.params.id) {
      this.productService.getProduct(`${snapshot.params.id}.md`).subscribe(
        x => {
          this.markdown = x;
        },
        _ => {
          this.notFound = true;
        }
      );
    } else {
      this.notFound = true;
    }
  }
}
