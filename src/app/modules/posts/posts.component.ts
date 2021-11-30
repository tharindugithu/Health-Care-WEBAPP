import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations:[fadein]
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
