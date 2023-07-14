import {Component, EventEmitter, Input, Output} from '@angular/core';
import {items} from "../../items_sold";

@Component({
  selector: 'app-zelle-description',
  templateUrl: './zelle-description.component.html',
  styleUrls: ['./zelle-description.component.css']
})
export class ZelleDescriptionComponent {

  thank_you_message:string="thank you for having explored our product!"

  class:boolean=true;
  @Input() title_item:items|any;
  @Output() acknowledge=new EventEmitter<string>()
  discount: an y;


  constructor() {
  }

  explore_item(){

    console.log("the button has been clicked correctly");
    this.acknowledge.emit(this.thank_you_message);
  }

  items_on_sale():string|any{

    if(this.title_item.on_sale===true) {


      return {
        'sale': true,

      };


    }
  }




}
