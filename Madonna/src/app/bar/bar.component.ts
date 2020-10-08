import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var knoppen: any = document.getElementsByClassName('knop');
    for (var knop of knoppen)
    {
      knop.style.backgroundColor = '#e08269';
      knop.style.color = 'black';
    }

  }

}
