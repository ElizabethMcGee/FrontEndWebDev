//imports
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-component/list-component';

//angular component
@Component({
  //specifies css selector
  selector: 'app-root',
  //imports component uses
  imports: [RouterOutlet, ListComponent],
  //html template
  templateUrl: './app.html',
  //css styles
  styleUrl: './app.css'
})

export class App {
  //declare variables
  hide:boolean = false;
  count:number = 0;

  //function to increase count on button click
  onButtonClick(){
    //increases count by 1
    this.count++;
  }

  //function to hide text on star double clicked
  onImageDoubleClick(){
    //if star is hidden when double clicked
    if(this.hide == true){
      this.hide = false;
    }else{ //else if show when double clicked hide
      this.hide = true;
    }
    
  }
}
