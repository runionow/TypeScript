module interfaces{
   
    interface startstop extends IAutoOptions{
       stop (callback : (stopStatus:boolean,engineType:string) => void ) : void
       start (callback : (stopStatus:boolean,engineType:string) => void ) : void
    }

    interface IAutoOptions{
        engine: Engine;
        basePrice: number;
        state: string;
        make?:string;
        model?:string;
        year?:string;
    }

    class Auto implements startstop{
        engine: Engine;
        basePrice: number;
        state: string;
        engineType: string;

        constructor(data: IAutoOptions,engineType: string){
            this.engine = data.engine;
            this.basePrice = data.basePrice;
            this.state = data.state;
            this.engineType = engineType;
        }

        stop (callback : (stopStatus:boolean,engineType:string) => void ): void {
            window.setTimeout(()=>{callback(true,this.engineType)},1000)}

         start (callback : (stopStatus:boolean,engineType:string) => void ): void {
            window.setTimeout(()=>{callback(true,this.engineType)},1000)}

        }
        
}
