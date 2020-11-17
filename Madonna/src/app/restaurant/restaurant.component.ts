import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var knoppen: any = document.getElementsByClassName('knop');
    for (var knop of knoppen)
    {
      //knop.style.backgroundColor = '#a0b991';
      //knop.style.color = 'black';
    }

    document.getElementById("arrowSVG").style.display = 'block';
    document.getElementById("arrowSVG").style.fill = '#a0b991';
  }

}
