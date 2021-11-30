import { fadein } from './../../layouts/route-animation';
import { Component, Input, OnInit } from '@angular/core';
import { BlogPostCard } from '../cardList';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css'],
  animations:[fadein]
})
export class SupportComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }
  posts: BlogPostCard[] = [
    {
      mainImageUrl: './assets/html.png',
      category: 'HTML',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/css.png',
      category: 'CSS',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/js.png',
      category: 'JAVA SCRIPT',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/an.png',
      category: 'ANGULAR',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/mon.png',
      category: 'MONGODB',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: './assets/dj.png',
      category: 'DJANGO',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
      category: 'fast service',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/cGwfkwHmt98/400x250',
      category: 'look good',
      title: 'Light_Rain Developers',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
  ];

}
