import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  constructor() {
  }


  array_links:string[]=["HOW IT WORKS","GET STARTED","FINANCIAL_EDUCATION"];

}
