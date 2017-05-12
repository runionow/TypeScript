
module ExtendingTypes{
    class Auto {
        engine: Engine;
        constructor(engine: Engine){
            this.engine = engine;
        }
    }

    class Truck extends Auto{
        fourByFour: boolean;
        constructor(engine: Engine,fourByFour: boolean){
            // The below super method will pass values to the constructor of Auto class.
            super(engine);
            this.fourByFour = fourByFour;
        }
    }

}