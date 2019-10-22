import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product;

  title: string;
  description: string;
  url: string;
  path: string | null;
  relationShipToProduct: RelationShipToProduct;
  type: ProductType;
  tags: string[];

  constructor() {}

  ngOnInit() {
    this.title = this.product.title;
    this.description = this.product.description;
    this.url = this.product.url;
    this.path = this.product.path;
    this.type = this.product.type;
    this.relationShipToProduct = this.product.relationShipToProduct;
    this.tags = this.product.tags;
  }
}
