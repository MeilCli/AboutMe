import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "productFilter",
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], col: string, value: any): any {
        if (products.length == 0 || col.length == 0) {
            return products;
        }
        return products.filter((x) => x[col] === value);
    }
}
