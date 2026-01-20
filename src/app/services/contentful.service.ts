import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contentful } from '../../environments/env'


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  url = contentful.baseURL

  constructor(private http: HttpClient) { }

  getGallery() {
    return this.http.get<any>(
      `${contentful.baseURL}/spaces/${contentful.spaceId}/entries`, {
        params: {
          content_type: "gallery-page"
        },
      headers: {
        
        Authorization: `${contentful.access_token}`
      }
    }
    )
  }
}
