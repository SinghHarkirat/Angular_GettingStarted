import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
selector:'pm-star',
templateUrl:'./star.component.html',
styleUrls:['./star.component.css']
})

export class StarRatingComponent implements OnChanges
{
    @Input() rating:number=0;
    cropWidth:number=75;
    @Output() ratingClicked:EventEmitter<string>
    =new EventEmitter<string>(); 

ngOnChanges(): void {
    console.log('On changes called');
    this.cropWidth=this.rating*75/5; 
}


onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked !!`);
}
}