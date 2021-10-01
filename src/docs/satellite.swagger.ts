export const Satellite = {
    "type": "object",
    "required": [
        "name",
        "distance",
        "message"
      ],
    "properties": {
        "name": {
        "type": "string",
        "description": "Satellite name",
        "enum": [
            "kenobi",
            "skywalker",
            "sato"
            ]
        },
        "distance": {
        "type": "number",
        "format": "float",
        "example": 100.2
        },
        "message": {
        "type": "array",
        "items": {
                "type": "string"
            } 
        }
    }
}