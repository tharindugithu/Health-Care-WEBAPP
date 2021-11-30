import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  animations:[fadein]
})
export class ChannelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
