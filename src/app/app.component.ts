import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`<nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand' style='margin-left:30px;'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
    <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
    <li><a class='nav-link' routerLink='/register' routerLinkActive='active'>Register</a></li>
  </ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle:string="Acme product management";
  title = 'apm-new';
}
