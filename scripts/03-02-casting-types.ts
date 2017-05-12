module CastingTypes {
    declare var document;
    class Casting{
        private z: HTMLInputElement;
        private y: HTMLInputElement;
        private output: HTMLSpanElement;
        constructor(xId: string,yId: string,outputId: string){
            this.z = <HTMLInputElement>document.getElementById(xId);
            this.y = <HTMLInputElement>document.getElementById(yId);
            this.output = <HTMLInputElement>document.getElementById(outputId);
            this.writeEvents();
        }
        add(x:number,y:number) : number{
            return x+y;
        }
        subtract(X:number,y:number) : number{
            return x-y;
        }
        writeEvents(): void{
            document.getElementById('Add').addEventListener('click',event=>{
                this.output.innerHTML = this.add(parseInt(this.z.value),parseInt(this.y.value)).toString()
            })
            document.getElementById('Subtract').addEventListener('click',event=>{
                this.output.innerHTML = this.subtract(parseInt(this.z.value),parseInt(this.y.value)).toString()
            })
        } 

    }
}