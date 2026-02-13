import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  gallerySlug!: string;
  galleryName!: string;
  gallery!: any;
  galleryDescription!: string
  contentful = inject(ContentfulService)
  photoUrls:any = [];


  constructor(private route: ActivatedRoute) {

  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(param => console.log(this.gallerySlug = param['galleryName']))
    this.getData()
  }

  getData() {
    this.contentful.gallery$.subscribe((res: any) => {
      console.log(res);
      
      let gallery = res.items.find((gallery: any) => gallery.fields.slug == this.gallerySlug)
      if (gallery) {
        this.galleryName = gallery.fields.title
        this.galleryDescription = gallery.fields.description.content[0].content[0].value
        gallery.fields.photos.forEach((photoItem:any) => {
          const photoId = photoItem.sys.id
          let photoElement = res.includes.Asset.find((el:any) => el.sys.id == photoId)
          
          this.photoUrls.push(photoElement.fields.file.url)
        });
        console.log(this.photoUrls);
        
        

      }
    })
  }

}
