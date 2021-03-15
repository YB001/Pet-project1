import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GetImageService, ImgInfo} from './get-image.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.sass']
})
export class ImageSearchComponent implements OnInit {

  imgsInfo: ImgInfo
  perPage: ''
  searchField = ''

  updateData(form: FormGroup) {
    this.perPage = form.value.perPages
    this.searchField = form.value.searchField
    console.log(this.searchField)
    console.log(this.perPage)
    this.fetchInfo()
  }

  constructor(private imageService: GetImageService) { }

  ngOnInit(): void {
    this.fetchInfo()
  }

  loading = false //для отображения загрузчика

  fetchInfo() {
    this.loading = true
    this.imageService.fetchInfo(this.perPage, this.searchField)
      .subscribe(imgsInfo => {
        console.log("imgsInfo:",imgsInfo)
        this.imgsInfo = imgsInfo
        this.loading = false
      })
  }

  showLarge(id){
    this.imgsInfo.hits.forEach(i=> {
      if(i.id == id){
        window.open(`${i.largeImageURL}`, '_blank')
      }
    })

  }
}
