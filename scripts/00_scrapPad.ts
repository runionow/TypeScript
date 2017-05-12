let rambo : (s: string, p: string, c: string) => void = function (startButton: string, pauseButton: string, clearButton:string) :void {
                document.getElementById(startButton).
                    addEventListener("click", startTimer, false);
                document.getElementById(pauseButton).
                    addEventListener("click", pauseTimer, false);
                document.getElementById(clearButton).
                    addEventListener("click", clearTimer, false);
                displayTimer();
            };

let myAdd: (baseValue:number, increment:number) => void =
    function(x: number, y: number) { return x + y; };

rambo('startButton', 'pauseButton', '115');