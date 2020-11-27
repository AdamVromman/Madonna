import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feestzaal',
  templateUrl: './feestzaal.component.html',
  styleUrls: ['./feestzaal.component.css']
})
export class FeestzaalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    scroll(0,0)
  }

}
