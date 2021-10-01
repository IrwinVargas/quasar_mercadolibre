import { Request, Response, Next} from 'express'
import TopSecretController from './topsecret.controller'
import App from '../app'
import { agent as request } from "supertest";


const topSecretController = new TopSecretController();
const app = new App([
  topSecretController,
]);


describe('POST - /topsecret generate location', () => {
  it('200 - Location', async () => {
    const sendRequest = {"satellites":[{"name":"kenobi","distance":100,"message":["este","","","mensaje",""]},{"name":"skywalker","distance":115.5,"message":["","es","","","secreto"]},{"name":"sato","distance":142.7,"message":["este","","un","",""]}]}
    const expectedResponse = {"position":{"x":-45.53230833333335,"y":-1093.5074},"message":"este es un mensaje secreto"};
    const expectedStatusCode = 200
    
    
    const result = await request(app.app)
    .post(`/api/v1${topSecretController.path}`)
    .send(sendRequest)    
    
    expect(result.statusCode).toEqual(expectedStatusCode);
    expect(result.body).toEqual(expectedResponse)
  });

  it('404 - Location', async()=>{
    const sendRequest = {"satellites":[{"name":"kenobi","distance":100,"message":["este","","","mensaje",""]},{"name":"skywalker","distance":115.5,"message":["","","","","secreto"]},{"name":"sato","distance":142.7,"message":["este","","un","",""]}]}
    const expectedResponse = {"status":404,"message":"Message cannot be determined."};
    const expectedStatusCode = 404
    
    
    const result = await request(app.app)
    .post(`/api/v1${topSecretController.path}`)
    .send(sendRequest)    
    
    expect(result.statusCode).toEqual(expectedStatusCode);
    expect(result.body).toEqual(expectedResponse)
  })
});