import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application2';
  data: any;
  getValues(val:any){
    console.warn(val);
  }
  Registers(basicForm:NgForm) {
    if (basicForm.valid){
      this.data=basicForm.value;
    }
  }

 
}
