import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor (){}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
