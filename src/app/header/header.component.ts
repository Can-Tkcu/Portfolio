import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [],
})
export class HeaderComponent {
  isOpen = false;

  public toggle() {
    this.isOpen = !this.isOpen;
    setTimeout(()=> {
      document.getElementById('btn-open')?.classList.add('d-none')
      document.getElementById('btn-close')?.classList.remove('d-none')
      document.getElementById('btn')?.classList.remove('menu-open')
    },550)
    if(this.isOpen == false) {
      document.getElementById('btn')?.classList.add('menu-open-R')
    setTimeout(()=> {
      document.getElementById('btn')?.classList.remove('menu-open-R')
      document.getElementById('btn-close')?.classList.add('d-none')
      document.getElementById('btn-open')?.classList.remove('d-none')
    },550)

    }
  }
}
