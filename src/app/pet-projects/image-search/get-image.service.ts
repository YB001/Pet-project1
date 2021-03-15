import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ImageSearchModule} from './image-search.module';
import {ImageSearchComponent} from './image-search.component';

export interface  ImgInfo {
  total: number
  hits: [{
    id: number
    previewURL: string
    largeImageURL: string
  }]
}

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  constructor(private http: HttpClient) { }

  fetchInfo(perPage, searchField):Observable<ImgInfo>{
    console.log('perPage',perPage)
    let params = new HttpParams()
    params = params.append('per_page', perPage)
    params = params.append('q', searchField)
    return this.http.get<ImgInfo>(`https://pixabay.com/api/?key=19464109-dc70263e21246972d884b5542&image_type=photo`,
      {params})
  }
}
