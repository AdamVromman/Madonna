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

    let m = document.getElementById('m')
    let adonna = document.getElementById('adonna')
    let scrollEvent = document.getElementById('scrollEvent')


    scrollEvent.addEventListener('mouseover', () =>{
      if (document.body.scrollTop == 0)
      {
        scroll({left: 0, top: 200, behavior: 'smooth'})
      }

    })


    // m.addEventListener('mouseenter', () => {
    //  adonna.style.display = 'inline'
    //  adonna.style.opacity = '1'
    // })

    // m.addEventListener('mouseleave', () => {
    //   adonna.style.display = 'none'
    //   adonna.style.opacity = '0'
    // })

  }

  


}
