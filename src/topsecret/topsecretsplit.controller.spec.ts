import TopSecretSplitController from './topsecretsplit.controller'
import App from '../app'
import { agent as request } from "supertest";


const topSecretController = new TopSecretSplitController();
const app = new App([
  topSecretController,
]);


describe('POST - /topsecret_split save satellite', () => {
  it('201 - Satellite', async () => {
    const sendRequest = {"name":"kenobi","distance":100,"message":["este","","","mensaje",""]}
    const expectedStatusCode = 201
    
    
    const result = await request(app.app)
    .post(`/api/v1${topSecretController.path}`)
    .send(sendRequest)    
    
    expect(result.statusCode).toEqual(expectedStatusCode);
  });

});