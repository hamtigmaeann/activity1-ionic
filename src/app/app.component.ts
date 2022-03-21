import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'User List', url: '/folder/List', icon: 'List' },
  
  ];
  public labels = [];
  constructor() {}
}
