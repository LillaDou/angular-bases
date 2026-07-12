import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router"; //directivas

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
})
export class Navbar {}
