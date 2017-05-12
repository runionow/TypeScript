module ExtendingTypes{
    class Engine{
        constructor(public horsePower: number , public engineType: string){}
        start(callback: (startStatus: boolean,engineType: string)=> void){
            window.setTimeout(()=> {
                callback(true,this.engineType)
            }, 1000);
        }
        stop(callback: (stopStatus: boolean,engineType: string) => void){
            window.setTimeout(()=>{
                callback(true,this.engineType)
            },1000)
        }
    }
    
    class Accesory {
        constructor(public accesoryNumber:number, public title: string){}
    }

    class Auto{
        private _basePrice: number;
        private _engine:Engine;
        make: string;
        model: string;
        accessoryList: string;

        constructor(basePrice: number,engine: Engine,make: string,model: string){
            this._engine=engine;
            this._basePrice= basePrice;
            this.make = make;
            this.model = model;
        }
        calculateTotal():number {
            var taxRate : number = 0.08;
            return this._basePrice+(taxRate*this._basePrice)
        }
        addAccessories(...accessories: Accesory[]){
            this.accessoryList ='';
            for(var i=0; i<accessories.length; i++){
                var ac = accessories[i];
                this.accessoryList +=ac.accesoryNumber +' '+ac.title+'<br />';
            }
        }
        getAccesoryList():string {
            return this.accessoryList;
        }
        getBasePrice():number {
            return this._basePrice;
        }
        setBasePrice(value:number){
            if(value === undefined) throw 'Please input Value !'
            else{
                this._basePrice=value;
            }
        }
        getEngine(): Engine{
            return this._engine;
        }
        setEngine(value:Engine):void{
            if(value=== undefined) throw 'Input an Engine Object !'
            else {
                this._engine = value;
            }
        }
    }

    class Truck extends Auto{
        bedLength : string;
        fourByFour: boolean;
        constructor(basePrice: number,engine: Engine,make: string,model: string,bedLength: string,fourByFour: boolean){
            super(basePrice,engine,make,model);
            this.bedLength = bedLength;
            this.fourByFour = fourByFour;
        }
    }

}

window.onload = function(){
    var auto = new Auto(4000,new Engine(300,'V8'),'Chevy','Silverado')
    alert(auto.engine.engineType)
}

