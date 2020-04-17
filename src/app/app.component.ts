import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  values: string;
  styleObj = {color:'red'};
 

set setColor(data: string){
  console.log("hello");
}


  onKey(event: any){
    this.values += event.target.value ;
  }



    onClick(event: any, age: any){
    this.year = age ;

  }


  
}
