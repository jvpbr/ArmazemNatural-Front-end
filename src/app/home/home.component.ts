import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

listaCategoria: Categoria[]

  constructor() { }

  ngOnInit(): void {
  }

}
