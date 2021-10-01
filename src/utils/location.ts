import Circle from "./circle";

class Location{

    private circles: Circle[]

    constructor(circles: Circle[]){
        this.circles = circles
    }

    public find(): Circle{
        let top = 0;
        let bottom = 0;

        this.circles.forEach((circle: Circle, index: Number) => {
            let firstCricle: Circle = circle
            let secondCircle: Circle, thirdCircle : Circle
            
            if (index == 0){
                secondCircle = this.circles[1]
                thirdCircle = this.circles[2]
            } else if (index == 1){
                secondCircle = this.circles[0]
                thirdCircle = this.circles[2]
            } else{
                secondCircle = this.circles[0]
                thirdCircle = this.circles[1]
            }

            let d: number = secondCircle.getX() - thirdCircle.getX()

            let v1: number = (firstCricle.getX() * firstCricle.getX() + firstCricle.getY() * firstCricle.getY()) - (firstCricle.getRadio() * firstCricle.getRadio())
            top += d * v1
            
            let v2: number = firstCricle.getY() * d
            bottom += v2
        })

        return this.getCoordinates(top, bottom)
    }

    private getCoordinates(top: number, bottom: number): Circle {
        let y: number = top / (2 * bottom)
        let firstCircle: Circle = this.circles[0]
        let secondCircle: Circle = this.circles[1]

        top = secondCircle.getRadio() * secondCircle.getRadio() + firstCircle.getX() * firstCircle.getX() 
                + firstCircle.getY() * firstCircle.getY() - firstCircle.getRadio() * firstCircle.getRadio() 
                - secondCircle.getX() * secondCircle.getX() - secondCircle.getY() * secondCircle.getY() 
                - 2 * (firstCircle.getY() - secondCircle.getY()) * y;
        
        bottom = firstCircle.getX() - secondCircle.getX()
        let x: number = top / (2 * bottom)
        
        let coordinates: Circle = new Circle(x, y)
        return coordinates
    }
}

export default Location;