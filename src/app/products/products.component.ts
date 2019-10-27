import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../services/product.service";
import { Title, Meta } from "@angular/platform-browser";
import { setDefaultMeta, setMeta } from "../head";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit, OnDestroy {
  private productsSource: Product[];
  products: Product[];
  types: string[];
  relationShipToProducts: string[];
  tags: string[];

  constructor(
    private title: Title,
    private meta: Meta,
    private productService: ProductService
  ) {}

  ngOnInit() {
    setMeta(this.title, this.meta, {
      title: "MeilCliの製作物 - MeilCli's AboutMe",
      description: "MeilCliが製作したものです"
    });

    this.productsSource = [];
    this.products = [];
    this.types = [];
    this.relationShipToProducts = [];
    this.tags = [];
    this.productService.getProducts().subscribe(x => this.setProducts(x));
  }

  ngOnDestroy() {
    setDefaultMeta(this.title, this.meta);
  }

  private setProducts(products: Product[]) {
    this.productsSource = products;
    this.products = products;
    this.types = [
      ...new Set(products.map(x => x.type).sort((x, y) => x.localeCompare(y)))
    ];
    this.relationShipToProducts = [
      ...new Set(
        products
          .map(x => x.relationShipToProduct)
          .sort((x, y) => x.localeCompare(y))
      )
    ];

    const tagSource: string[] = [];
    for (const product of products) {
      for (const tag of product.tags) {
        tagSource.push(tag);
      }
    }

    this.tags = [...new Set(tagSource.sort((x, y) => x.localeCompare(y)))];
  }

  noFilter() {
    this.products = this.productsSource;
  }

  typeFilter(type: string) {
    this.products = this.productsSource.filter(x => x.type === type);
  }

  relationShipToProductFilter(relationShipToProduct: string) {
    this.products = this.productsSource.filter(
      x => x.relationShipToProduct === relationShipToProduct
    );
  }

  tagFilter(tag: string) {
    this.products = this.productsSource.filter(x => x.tags.includes(tag));
  }
}
