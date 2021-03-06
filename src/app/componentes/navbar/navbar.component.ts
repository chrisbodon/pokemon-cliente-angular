import { Component, OnInit } from '@angular/core';
import { RUTAS } from 'src/app/app-routing.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas: Array<any>;

  constructor(private router: Router) {
    console.trace('NavbarComponent constructor');
    this.rutas = RUTAS;

  }// constructor

  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
  }// ngOnInit


}// NavbarComponent
