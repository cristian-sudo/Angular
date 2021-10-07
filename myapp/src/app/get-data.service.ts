import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
ossas:string="first"
showOssas():string{
return this.ossas
}
  constructor() { }
}
