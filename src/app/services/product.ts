interface Product {
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly path: string | null;
    readonly type: ProductType;
    readonly relationShipToProduct: RelationShipToProduct;
    readonly tags: string[];
}

type ProductType = "その他" | "ライブラリー" | "アプリケーション" | "ツール" | "アクション";

type RelationShipToProduct = "オーナー" | "メインメンテナー";
