import { IsString, IsNumber, ArrayNotEmpty } from 'class-validator';
 
class SatelliteDto {
    @IsString()
    name: string;

    @IsNumber()
    distance: number;

    @ArrayNotEmpty()
    message: string[]; 
}
 
export default SatelliteDto;