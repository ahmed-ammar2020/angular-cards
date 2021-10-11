import { Component } from '@angular/core';
import { image, lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [
    {
      imageUrl: image.imageUrl(),
      title: lorem.words(),
      desc: lorem.paragraph(),
    },
    {
      imageUrl: image.abstract(),
      title: lorem.words(),
      desc: lorem.paragraph(),
    },
    {
      imageUrl: image.city(),
      title: lorem.words(),
      desc: lorem.paragraph(),
    },
    {
      imageUrl: image.cats(),
      title: lorem.words(),
      desc: lorem.paragraph(),
    },
  ]
}
