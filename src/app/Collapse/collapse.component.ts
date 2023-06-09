import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent {
  title = 'Title';
  isHidden = false;

  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
