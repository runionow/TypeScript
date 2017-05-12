interface IRectangle{
    height: number;
    width: number;
    getArea(): number;
}

namespace Shapes{
    export class IRectangle implements IRectangle{
        constructor(public height: number,public width:number){

        }
    }
}
