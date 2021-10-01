import * as bodyParser from 'body-parser';
import express from 'express';
import * as swaggerUi from 'swagger-ui-express'
import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';
import {swaggerDocument} from './docs/swagger'
class App {
  public app: express.Application;
  private apiVersion: string
 
  constructor(controllers: Controller[]) {
    this.app = express();
    this.apiVersion = 'v1'
 
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
    this.generateDocs();
  }
 
  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
 
  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      
      this.app.use(`/api/${this.apiVersion}`, controller.router);
    });
  }

  private generateDocs(){
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  }
 
}
 
export default App;