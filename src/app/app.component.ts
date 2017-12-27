import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  // Declaring an array of interface objects
  myArray: Array<{id: number, continent: string}> = [
    {id:1,continent:`Europe`},
    {id:2,continent:`Asia`},
    {id:3,continent:`North America`},
    {id:4,continent:`South America`},
    {id:5,continent:`Australia`},
    {id:6,continent:`Africa`},
    {id:7,continent:`Antarctica`}
  ];

}
