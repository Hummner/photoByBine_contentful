import { Component, inject, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent implements OnInit {

  categories!: any;
  photos!: any;

  contentfulService = inject(ContentfulService)
  ngOnInit(): void {
    this.contentfulService.getGallery().subscribe(
      (res) => {
        this.categories = this.loadData(res);
        this.photos = res.includes.Assets
        console.log(this.categories);
        console.log(res);

      }
    )
  }

  loadData(res: any) {
    const items = res.items
    const photos = res.includes.Asset
    return this.categories = items.map((category: any) => {
      return {
        title: category.fields.title,
        description: category.fields.description,
        photoIds: category.fields.photos,
        coverImage: this.loadCoverImage(photos, category.fields.coverImage.sys.id)
      }
    }
    )
  }

  findAssetById(assets: any, id: string) {
    return assets.find((asset: any) => asset.sys.id === id)
  }

  loadCoverImage(photos: any, fieldId: string) {
    const image = this.findAssetById(photos, fieldId)
    return image.fields.file.url
  }
}
