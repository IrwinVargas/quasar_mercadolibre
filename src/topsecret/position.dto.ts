import { IsNumber } from 'class-validator';
 
class PositionDto {

    constructor(){}

    @IsNumber()
    x: number;

    @IsNumber()
    y: number; 
}
 
export default PositionDto;