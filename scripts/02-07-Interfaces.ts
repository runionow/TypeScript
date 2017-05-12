module InterfaceType{
    // Function takes a number x and returns a number.
    interface SquareFunction{
        (x:number): number;
    }
    var squareIt : SquareFunction = (num : number) => num * num;
    var squareItBasic = (num:number) => num*num;

    interface Rectangle {
        h: number,
        w?: number
    }
    // For more refer to 02-06
    var squareIT: (rect : Rectangle) => number;

    var rectA = {h:9}
    var rectB = {h:9,w:10}

    squareIT = (rect) => {
        if(rect.w === undefined){
            return rect.h * rect.h
        }
        return rect.h*rect.w
    }

    interface Person {
        name : string,
        age? : number,
        kids : number,
        calcPets: () => number,
        makeYounger: (years: number) => void,
        greet: (msg: string) => string
    }

var p: Person ={
    name: 'Arun',
    age: 40,
    kids:2,
    calcPets:function(){
        return this.kids * 2;
    },
    makeYounger: function(years:number) {
        this.age -= years;
    },
    greet : function(msg: string) {
        return msg +', '+this.name
    }
}



}