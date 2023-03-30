import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template:
    '<div [ngClass]="{hidden: this.isHidden, dropdown: true}" (click)="toggleHidden()"><ng-content></ng-content></div>',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  isHidden = false;

  toggleHidden() {
    !this.isHidden;
  }
}
