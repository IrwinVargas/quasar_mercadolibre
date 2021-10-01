import HttpException from '../exceptions/HttpException';
import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import TopSecret from './topsecret.interface';
import validationMiddleware from '../middleware/validation.middleware';
import TopSecretService from './topsecret.service';
import Circle from '../utils/circle';
import PositionDto from './position.dto';
import TopSecretResponseDto from './topsecretresponse.dto';
import SatelliteDto from './satellite.dto';
import Satellite from './satellite.inteeface';
 
class TopSecretSplitController implements Controller {
  public path = '/topsecret_split';
  public router = express.Router();
  private topSecretService: TopSecretService;
 
  constructor() {
    this.initializeRoutes();
    this.topSecretService = new TopSecretService()
  }
 
  private initializeRoutes() {
    this.router.post(`${this.path}/:satellite_name`, validationMiddleware(SatelliteDto),this.saveSatellite);
    this.router.post(`${this.path}`,this.getLocationByParts);
  }

  private saveSatellite = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    
    const satellite: Satellite = request.body;
    satellite.name = request.params.satellite_name

    await this.topSecretService.saveSatellite(satellite)
    
    response.status(201).send()

  }

  private getLocationByParts = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    const parts = await this.topSecretService.getLocationByParts()
    const coordenates: Circle = this.topSecretService.GetLocation(parts.distances) 
    const messages: string[][] = parts.messages
    const message: string = this.topSecretService.getMessage(messages)

    if(message.includes('  '))
      next(new HttpException(404, 'Message cannot be determined.'));

      let position = new PositionDto()
      position.x = coordenates.getX()
      position.y = coordenates.getY()

      let topSecretResponseDto = new TopSecretResponseDto()
      topSecretResponseDto.position = position
      topSecretResponseDto.message = message

      response.status(200).send(topSecretResponseDto)

  }

}
 
export default TopSecretSplitController;
