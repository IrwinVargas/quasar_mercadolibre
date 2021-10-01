import { Satellite } from "interfaces/satellite.interface";
import Circle from "../utils/circle";
import Location from "../utils/location";
import TopSecretRepository from "./topsecret.repository";
import SatelliteDTO from './satellite.inteeface';
import HttpException from "../exceptions/HttpException";


class TopSecretService {

    private satellites: Satellite
    private kenobi: Circle
    private skywalker: Circle
    private sato: Circle
    private topSecretRepository: TopSecretRepository

    constructor(){
        this.kenobi = new Circle(-500, -200)
        this.skywalker = new Circle(100, -100)
        this.sato = new Circle(500, 100)
        this.satellites = {} 
        this.satellites['kenobi'] = this.kenobi
        this.satellites['skywalker'] = this.skywalker
        this.satellites['sato'] = this.sato
        this.topSecretRepository = new TopSecretRepository()
    }

    public GetLocation(distances: any[]) : Circle {
        let circles: Circle[] = []

        distances.forEach( (satellite, index) => {
            let circle = this.satellites[satellite.name]
            circle.setRadio(satellite.distance)
            circles.push(circle)
        });

        let location = new Location(circles)
        return location.find()
    }

    public getMessage(messages: string[][]) : string {
        let joinMessage: string[]

       for (let index = 0; index < messages.length; index++) {
           const message = messages[index];
           
           if(index == 0){
               joinMessage = message
               continue
           } 

           joinMessage.forEach((word, position) => {
               if(word === "")
               joinMessage[position] = message[position]
           })
       }

       return joinMessage.join(' ')
    }

    public async saveSatellite(satellite: SatelliteDTO){
       return this.topSecretRepository.set(satellite)
    }

    public async getLocationByParts(){
        let distances: SatelliteDTO[] = [];
        let messages: string[][] = [];

        for (let key in this.satellites) {
            const satellite = await this.topSecretRepository.get(key)
            if(!satellite)
                throw new HttpException(404, 'The information is enough.')

            distances.push(satellite)
            messages.push(satellite.message)
          }
        return {
            distances,
            messages
        }
    }
}

export default TopSecretService;