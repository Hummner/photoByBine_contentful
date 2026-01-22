import { Component } from '@angular/core';
import { HEROComponent } from "./hero/hero.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HEROComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
