import { Component } from '@angular/core';
import { HEROComponent } from "./hero/hero.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HEROComponent, GalleryComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
