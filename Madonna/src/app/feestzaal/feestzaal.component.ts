import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feestzaal',
  templateUrl: './feestzaal.component.html',
  styleUrls: ['./feestzaal.component.css']
})
export class FeestzaalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var knoppen: any = document.getElementsByClassName('knop');
    for (var knop of knoppen)
    {
      //knop.style.backgroundColor = ' #f1dc5f';
      //knop.style.color = 'black';
    }

document.getElementById("arrowSVG").style.display = 'block';
    document.getElementById("arrowSVG").style.fill = '#f1dc5f';

  }

}
