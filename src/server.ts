import 'dotenv/config';
import TopSecretController from './topsecret/topsecret.controller';
import App from './app';
import validateEnv from './utils/validateEnv';
import TopSecretSplitController from './topsecret/topsecretsplit.controller';
 
validateEnv();
 
const app = new App(
  [
   new TopSecretController(),
   new TopSecretSplitController()
  ],
);
 
app.listen();