import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  image : CatImage = {
    message: "Progressive Web app" ,
    api:"https://cataas.com/cat/says/" ,
    fontsize:40 ,
  }
  constructor() { }
public src :string ;
  ngOnInit() {
   this.generateSrc();
  }
generateSrc():void {
  this.src = this.image.api+this.image.message+ '?size=' + this.image.fontsize;
}

}

class CatImage {
  message: string ;
  api:string ;
  fontsize:number ;
}
