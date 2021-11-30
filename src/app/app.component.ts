import { fader } from './layouts/route-animation';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fader]
})
export class AppComponent {
  title = 'material-demo';
  opened=true;

  isOpen(){
    this.opened=!this.opened
  }
  

}
