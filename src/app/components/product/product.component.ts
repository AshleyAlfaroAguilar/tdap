import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  constructor(){}

  @Input() product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  date = new Date();

  // product = 
  //   {
  //     id: '1',
  //     image: 'assets/images/img1.png',
  //     title: 'Camisa 1',
  //     price: 100,
  //     description: 'bla bla bla bla bla'
  //   };

  ngOnInit(): void {
      
  }

  addCart() {
    console.log('Añadiendo al carrito')
    this.productClicked.emit(this.product.id);
  }

}
