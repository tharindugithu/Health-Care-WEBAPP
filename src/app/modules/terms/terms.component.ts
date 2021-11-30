import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
  animations:[fadein]
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
