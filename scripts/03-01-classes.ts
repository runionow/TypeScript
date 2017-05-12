module ClassTutorial{
    class Engine {
        constructor(public horsePower: number, public engineType: string){ }
        
    }
    class Car {
        private _engine: Engine;
        constructor(engine: Engine){
            this._engine=engine;
        }

        get engine(): Engine {
            return this._engine;
        }

        set engine(value: Engine){
            if(value === undefined) throw 'Supply a Engine !'
            this._engine = value;
        }

        start():void{
            console.log('Engine has been started !')
        }

        stop():void{
            console.log('Engine has been switched off !')
        }

    }
}

window.onload = function(){
    var Engine = new Engine(512,'V8');
    var Car = new Car(Engine);
    Car.start();
}