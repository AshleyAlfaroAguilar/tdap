import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  constructor (){}

  images: string[] = [
    '../../assets/images/home1.jpg',
    '../../assets/images/home2.jpg',
    '../../assets/images/home1.jpg',
    '../../assets/images/home2.jpg'
  ];

  ngOnInit(): void {

  }

  
  

}
