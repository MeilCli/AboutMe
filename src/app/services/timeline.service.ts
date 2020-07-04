import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TimelineService {
  private url = "assets/timelines.json";
  private liveUrl = "assets/live-timelines.json";

  constructor(private httpClient: HttpClient) {}

  getTimelines(): Observable<Timeline[]> {
    return this.httpClient.get<Timeline[]>(this.url);
  }

  getLiveTimelines(): Observable<Timeline[]> {
    return this.httpClient.get<Timeline[]>(this.liveUrl);
  }
}
