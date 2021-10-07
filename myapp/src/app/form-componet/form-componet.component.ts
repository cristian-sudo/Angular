import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-componet',
  templateUrl: './form-componet.component.html',
  styleUrls: ['./form-componet.component.css']
})
export class FormComponetComponent  {
  submit(){
    console.log("login")
  }

}
