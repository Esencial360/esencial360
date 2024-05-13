import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent implements OnInit {

  
  @Input()
  pageTitle!: string;


  ngOnInit(): void {
    console.log('pageTitle');
    
  }

}
