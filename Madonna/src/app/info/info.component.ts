import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var knoppen: any = document.getElementsByClassName('knop');
    for (var knop of knoppen)
    {
      //knop.style.backgroundColor = '#708363';
      //knop.style.color = 'black';
    }

    document.getElementById("arrowSVG").style.display = 'none';
  }

}
