import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  @Output()
  onSingleCollection = new EventEmitter<string>()
  
  @Input()
  title!: string;

  @Input()
  description!: string;

  @Input()
  image!: string;


  @Input()
  category!: any; 

  @Input()
  index!: number

  constructor() {}

  ngOnInit() {
    AOS.init({once: true});
  }

  onHandleCollection(categoryName: string) {
    this.onSingleCollection.emit(categoryName)
  }
}
