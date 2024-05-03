import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input()
  height!: string;

  @Input()
  width!: string;

  @Input()
  textColor!: string;

  @Input()
  bgColor!: string;

  @Input()
  text!: string;

}
