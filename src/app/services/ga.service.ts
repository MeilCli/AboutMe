import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

declare let gtag: any;

@Injectable({
  providedIn: "root"
})
export class GaService {
  constructor() {}

  private useGA(): boolean {
    return typeof gtag !== undefined;
  }

  sendPageView(url: string) {
    if (this.useGA() === false) {
      return;
    }
    if (url.startsWith("/") === false) {
      return;
    }
    if (environment.analytics.id !== null) {
      gtag("config", environment.analytics.id, { page_path: url });
    }
  }
}
