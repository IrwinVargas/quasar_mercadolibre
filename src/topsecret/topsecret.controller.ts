import HttpException from '../exceptions/HttpException';
import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import TopSecret from './topsecret.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateTopSecretDto from './topsecret.dto';
import TopSecretService from './topsecret.service';
import Circle from '../utils/circle';
import PositionDto from './position.dto';
import TopSecretResponseDto from './topsecretresponse.dto';
 
class TopSecretController implements Controller {
  public path = '/topsecret';
  public router = express.Router();
  private topSecretService: TopSecretService;
 
  constructor() {
    this.initializeRoutes();
    this.topSecretService = new TopSecretService()
  }
 
  private initializeRoutes() {
    this.router.post(this.path, validationMiddleware(CreateTopSecretDto), this.createTopSecret);
    this.router.get(this.path, this.getTopSecret);
  }

  private getTopSecret = (request: express.Request, response: express.Response) => {
    response.status(200).send({'hello': "you enter"})
  }
 
  private createTopSecret = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    
    const topSecretData: TopSecret = request.body;    

    const coordenates: Circle = this.topSecretService.GetLocation(topSecretData.satellites) 
    const messages: string[][] = topSecretData.satellites.map( satellite => satellite.message)
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

export default TopSecretController;
