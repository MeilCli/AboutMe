import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import * as fm from "front-matter";
import { setMeta, setDefaultMeta } from "src/app/head";
import { Title, Meta } from "@angular/platform-browser";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface FrontMatter {
    attributes: MetaAttribute;
    body: string;
}

interface MetaAttribute {
    name: string;
    source: string;
}

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit, OnDestroy {
    name: string;
    source: string;
    markdown: string;
    notFound: boolean;

    faExternalLinkAlt = faExternalLinkAlt;

    constructor(
        private title: Title,
        private meta: Meta,
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit() {
        const { snapshot } = this.route;
        if (snapshot.params.id) {
            this.productService.getProduct(`${snapshot.params.id}.md`).subscribe(
                (x) => {
                    const frontMatter: FrontMatter = fm.default(x);
                    setMeta(this.title, this.meta, {
                        title: `${frontMatter.attributes.name} - MeilCli's AboutMe`,
                        description: `${frontMatter.attributes.name}の紹介ページです`,
                    });

                    this.name = frontMatter.attributes.name;
                    this.source = frontMatter.attributes.source;
                    this.markdown = frontMatter.body;
                },
                (_) => {
                    this.notFound = true;
                }
            );
        } else {
            this.notFound = true;
        }
    }

    ngOnDestroy() {
        setDefaultMeta(this.title, this.meta);
    }
}
