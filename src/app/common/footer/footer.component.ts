import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //PROPIEDAD. instruccion de angular para el anio dinamico del footer
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
