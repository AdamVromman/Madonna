import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Madonna';
  public isMenuCollapsed = true;

  ngOnInit(): void {

    scroll(0,0)
   
  }

  


}
