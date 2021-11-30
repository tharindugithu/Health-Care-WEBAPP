import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
  animations:[fadein]
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
