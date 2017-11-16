import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  toPage1(){
    console.log(1);
  }

  toPage2(){
    console.log(2);
  }
}
