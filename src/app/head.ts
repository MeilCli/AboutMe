import { Title, Meta } from "@angular/platform-browser";

export interface MetaData {
    keyWords?: string;
    title?: string;
    description?: string;
    type?: "website" | "profile";
}

export function setMeta(title: Title, meta: Meta, metaData: MetaData) {
    if (metaData.keyWords) {
        meta.updateTag({ name: "keywords", content: metaData.keyWords });
    }
    if (metaData.title) {
        title.setTitle(metaData.title);
        meta.updateTag({ property: "og:title", content: metaData.title });
        meta.updateTag({ name: "twitter:title", content: metaData.title });
    }
    if (metaData.description) {
        meta.updateTag({ name: "description", content: metaData.description });
        meta.updateTag({
            property: "og:description",
            content: metaData.description,
        });
        meta.updateTag({
            name: "twitter:description",
            content: metaData.description,
        });
    }
    if (metaData.type) {
        meta.updateTag({ property: "og:type", content: metaData.type });
    }
}

export function setDefaultMeta(title: Title, meta: Meta) {
    setMeta(title, meta, {
        keyWords: "エンジニアー, ポートフォリオ, MeilCli",
        title: "MeilCli's AboutMe",
        description: "MeilCliのポートフォリオサイトです",
        type: "website",
    });
}
