import {Satellite} from './satellite.swagger'
export const postTopSecretSplit = {
    tags: ['Top Secret Split'],
    description: "Returns OK for Satellite saved",
    operationId: 'postTopSecretSplit',
    consumes: [
        "application/json"
    ],
    produces: [
     "application/json"
    ],
    parameters:[
        {
            in: "path",
            name: "satellite_name",
            schema:{
                type: "string"
  
            },
            required: true,
            description: "Satellite name"
          },
        {
            in: "body",
            name: "body",
            description: "Satellite message that need to be resolved",
            required: true,
            schema: {
                "$ref": "#/components/schemas/SatelliteSplit"
            }
        }
    ],
    responses: {
        "200": {          
            description: "Location and message received.",
            "content": {
                "application/json": {
                    
                }
            }
        }
    }
} 