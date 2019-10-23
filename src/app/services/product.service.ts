import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productsJsonUrl = "assets/products.json";
  private productsBaseUrl = "assets/products";

  constructor(private httpClient: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.productsJsonUrl)
      .pipe(map(x => this.sortProducts(x)));
  }

  private sortProducts(products: Product[]): Product[] {
    for (const product of products) {
      product.tags.sort();
    }
    return products.sort((x, y) => x.title.localeCompare(y.title));
  }

  public getProduct(file: string): Observable<string> {
    return this.httpClient.get<string>(`${this.productsBaseUrl}/${file}`, {
      responseType: "text" as "json"
    });
  }
}
