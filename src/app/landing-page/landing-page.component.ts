import { Component } from '@angular/core';
import { HEROComponent } from "./hero/hero.component";
import { NewsComponent } from "./news/news.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HEROComponent, NewsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
