import { Component } from '@angular/core';
import { ContainerComponent } from "./container/container.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
