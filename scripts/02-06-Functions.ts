module FunctionType {
    var squareITSimple = function(h: number,w: number) {
        return h*w;
    }

    // Arrow Functions
    var squareITSimplest = (h: number, w: number) => h*w
    
    // Function Declaration
    var helloWorld : (name?: string) => void;

    // Function Definition
    helloWorld = (name?: string) => {
        console.log('Hello ' + (name || 'Unknown Person'))
    }
    
    helloWorld();
    helloWorld('John')
    
    var squareIT: (rect : {h:number , w?:number}) => number;

    var rectA = {h:9}
    var rectB = {h:9,w:10}

    squareIT = (rect) => {
        if(rect.w === undefined){
            return rect.h * rect.h
        }
        return rect.h*rect.w
    }

    console.log(squareIT(rectA))
    console.log(squareIT(rectB))
}