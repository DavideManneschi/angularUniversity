import { Component } from '@angular/core';
import {products} from '../data_products'



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  parent_acknowledgement(thank_you:string){

    console.log(thank_you);




  }

  items_on_sale(){


  }
  constructor() {

  }


  protected readonly products = products;
}
