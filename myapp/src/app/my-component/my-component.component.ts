import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',//where it will be rendered
  styleUrls: ['./my-component.component.css'],//what is the style file
  providers:[GetDataService]
})
export class MyComponentComponent implements OnInit {

infoRecived:string=""//declaration of a variable
getInfo(){//a component function 
  this.infoRecived=this.TheService.showOssas()
}

constructor(private TheService:GetDataService){
}//anytime we use the component we create a private variable witch is equal to the servie exported
  ngOnInit(): void {
  }

}
