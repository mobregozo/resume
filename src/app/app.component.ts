import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'About',
        path: './about',
        index: 0
      },
      {
        label: 'Work',
        path: '/experience/list',
        index: 1
      },
      {
        label: 'Personal Info',
        path: './personal',
        index: 3
      }
    ];
  }
  ngOnInit(): void {
    // this.router.events.subscribe(res => {
    //   console.log('event');
    //   this.activeLinkIndex = this.routeLinks.indexOf(
    //     this.routeLinks.find(tab => tab.link === '.' + this.router.url)
    //   );
    // });
  }
}
