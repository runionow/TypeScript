module ObjectTypes {
    var points1 = {x:10,y:20}
    var x = points1.x

    var points2:{};
    points2 = {x:10,y:20};

    var points3: Object ={x:1};
    var rectangle = {
        h:10,
        w:20,
        calcArea: function(){
            return this.h * this.w;
        }
    };

    console.log(rectangle.calcArea());

    var squareIT: (n:number) => number = function(x){
        return x*x;
    }

    var val1 = squareIT(2)
    console.log(val1)
    val1 = squareIT(8)
    console.log(val1)

    var squareIT1= function (
    rect:{h:number, w?:number}){

        if(rect.w === undefined){
            return rect.h*rect.h;
        }
        return rect.h*rect.w;
        }

}