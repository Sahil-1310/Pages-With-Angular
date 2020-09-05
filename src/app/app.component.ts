import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CurrentPosition=0;
  image=[
    {
      title:'At the Beach',
      url:'https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936__340.jpg'
    },
    {
      title:'At the Forest',
      url:'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg'
    },
    {
      title:'At the city',
      url:'https://cdn.pixabay.com/photo/2014/09/07/21/52/urban-438393__340.jpg'
    }
  ]
}
