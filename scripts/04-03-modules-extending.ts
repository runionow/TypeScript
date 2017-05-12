interface IRectangle1 {
    height : number;
    width ?: number;
    getArea(): number;
}

module com.runionow.utils.shape {
    export class Rectangle implements IRectangle1{
        constructor(public height: number,
            public width: number){}

        getArea() :number {
            return this.height*this.width
        } 
    }
}

import arun = com.runionow.utils;


var arun1 = new arun.shape.Rectangle(10,20);