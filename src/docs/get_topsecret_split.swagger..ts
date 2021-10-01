import {Satellite} from './satellite.swagger'
export const getTopSecretSplit = {
    tags: ['Top Secret Split'],
    description: "Returns location and message from the spaceship one by one",
    operationId: 'getTopSecretSplit',
    consumes: [
        "application/json"
    ],
    produces: [
     "application/json"
    ],
    responses: {
        "200": {          
            description: "Location and message received.",
            "content": {
                "application/json": {
                    schema: {
                        "$ref": "#/components/schemas/TopSecretResponse"
                    }
                }
            }
        }
    }
} 