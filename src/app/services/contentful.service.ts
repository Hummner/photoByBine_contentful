import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentful } from '../../environments/env'
import { shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  url = contentful.baseURL
  gallery$!: any;

  constructor(private http: HttpClient) { }

  getGallery() {
    console.log("getGallery");
    
    this.gallery$ = this.http.get<any>(
      `${contentful.baseURL}/spaces/${contentful.spaceId}/entries`, {
        params: {
          content_type: "gallery-page"
        },
      headers: {
        
        Authorization: `${contentful.access_token}`
      }
    }
    ).pipe(
      shareReplay({ bufferSize: 1, refCount: false })
    )
    console.log(this.gallery$);
    
    return this.gallery$
  }
}
