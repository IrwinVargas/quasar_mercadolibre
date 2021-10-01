class Circle {

    private x: number;
    private y: number;
    private radio: number;

    constructor(x: number, y: number, radio: number = 0){
        this.x = x
        this.y = y
        this.radio = radio
    }

    public getX(): number {
        return this.x
    }
    public getY(): number {
        return this.y
    }
    public getRadio(): number {
        return this.radio
    }
    public setRadio(radio: number){
        this.radio = radio
    }
}

export default Circle;