import {Satellite} from './satellite.swagger'
export const postTopSecret = {
    tags: ['Top Secret'],
    description: "Returns location and message from the spaceship",
    operationId: 'postTopSecret',
    consumes: [
        "application/json"
    ],
    produces: [
     "application/json"
    ],
    parameters:[
        {
            in: "body",
            name: "body",
            description: "List os satellites messages that need to be resolved",
            required: true,
            schema: {
                type: "object",
                required: [
                    "satellites"
                ],
                properties: {
                    satellites: {
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/Satellite"
                            }
                        }
                }
            }
        }
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