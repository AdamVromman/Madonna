import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: string[] = ['1','2','3','4'].map(n => `assets/images/${n}.jpg`);

  constructor() { }

  ngOnInit(): void {


    var knoppen: any = document.getElementsByClassName('knop');
    for (var knop of knoppen)
    {
      knop.style.backgroundColor = '#f1cb60';
      knop.style.color = 'black';

    }
    document.getElementById("arrowSVG").style.display = 'block';
    document.getElementById("arrowSVG").style.fill = '#f1cb60';

  }

}
