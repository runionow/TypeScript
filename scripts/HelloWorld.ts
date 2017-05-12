class Car {
    engine:string;
    constructor(engine:string){
        this.engine=engine
       }
    start(){
        console.log('Started')
        alert('Engine has been Started' + this.engine)
    }
    stop(){
        console.log('Stopped')
        alert('engine has been Stopped' + this.engine)
    }
}

window.onload = function(){
     var Engine = new Car('V8')
     Engine.start()
     Engine.stop()
}