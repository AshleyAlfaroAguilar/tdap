import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  constructor(){}

  title = 'este valor esta siendo manejado desde el archivo que maneja la logica';

  items =['Perez', 'Lopez', 'Estrada', 'Gonzalez', 'Sanchez'];

  ngOnInit(): void{
  }

  agregarElemento(){
    this.items.push('nuevo item');
  }

  eliminarElemento(i){
    this.items.splice(i, 1)
  }

}
