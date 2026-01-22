import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { GalleryComponent } from './gallery-page/gallery/gallery.component';

export const routes: Routes = [
    {path: "", component: LandingPageComponent},
    {path: "gallery", component: GalleryPageComponent},
    {path: "gallery/:galleryName", component: GalleryComponent}
];
