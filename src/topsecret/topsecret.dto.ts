import { ValidateNested } from 'class-validator';
import SatelliteDto from './satellite.dto';
 
class CreateTopSecretDto {

    @ValidateNested()
    satellites: SatelliteDto[];
}
 
export default CreateTopSecretDto;