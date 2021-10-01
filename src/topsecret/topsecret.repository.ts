import {createClient} from 'redis';
import Satellite from './satellite.inteeface';

class TopSecretRepository{

    private client;

    constructor(){
        this.client = createClient();
        this.prepare()
    }

    async prepare() {
        this.client.on('error', (err) => console.log('Redis Client Error', err));
        await this.client.connect();
    }
        
    async set(satellite: Satellite) {
        //return this.client.del(satellite.name)
        return this.client.set(satellite.name, JSON.stringify(satellite)) 
    }
      
    async get(name): Promise<Satellite> {
        const satellite = await this.client.get(name)
        if(!satellite)
            return null
        return JSON.parse(satellite)
    }


}

export default TopSecretRepository;