module Shapes {
    export class rectangle{
        constructor(public height: number,public width?: number){}
    }

    export class Circle{
        constructor(public radius: number){}
    }
}

var shape = new Shapes.rectangle(10)
var shape1 = new Shapes.Circle(10)