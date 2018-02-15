import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["angular","react","vue"];

  newItem = "";
  pushItem = function(){
    if(this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  remove = function(index){
    this.items.splice(index,1);
  }
}
