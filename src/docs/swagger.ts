import { getTopSecretSplit } from './get_topsecret_split.swagger.'
import { Position } from './position.swagger'
import { Satellite } from './satellite.swagger'
import { SatelliteSplit } from './satellite_split.swagger'
import {postTopSecret} from './topsecret.swagger'
import { TopSecretresponse } from './topsecretresponse.swagger'
import { postTopSecretSplit } from './topsecret_split.swagger'

export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Quasar Document',
        description: 'Operation Quasar Fire',
        termsOfService: '',
        contact: {
            name: 'Irwin Vargas',
            email: 'irtvargas@gmail.com'
        }
    },
    servers: [
        {
            url: 'http://envquasar.eba-i6em3i6w.us-east-1.elasticbeanstalk.com/{basePath}',
            description: 'Prod server',
            variables: {
                basePath: {
                    default: "api/v1"
                }
            }
        },
        {
            url: 'http://localhost:{port}/{basePath}',
            description: 'Local server',
            variables: {
                port: {
                    enum: [
                        "5000"
                    ],
                    default: "5000"
                },
                basePath: {
                    default: "api/v1"
                }
            }
        }
    ],
    tags: [
        {
            name: 'Top Secret',
            description: 'Endpoints for topsecret information'
        },{
            name: 'Top Secret Split',
            description: 'Endpoints for topsecret split information'
        }
    ],
    paths: {
        "/topsecret": {
            "post": postTopSecret
        },
        "/topsecret_split/{satellite_name}": {
            "post": postTopSecretSplit
        },
        "/topsecret_split": {
            "get": getTopSecretSplit
        }
    },
    components: {
        schemas: {
            Satellite: Satellite,
            SatelliteSplit: SatelliteSplit,
            Position: Position,
            TopSecretResponse: TopSecretresponse

        }
    }
}