import { IsString, ValidateNested } from 'class-validator';
import PositionDto from './position.dto';
 
class TopSecretResponseDto {
    @ValidateNested()
    position: PositionDto;


    @IsString()
    message: string; 
}
 
export default TopSecretResponseDto;