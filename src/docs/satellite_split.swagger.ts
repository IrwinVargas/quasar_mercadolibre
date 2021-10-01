export const SatelliteSplit = {
    "type": "object",
    "required": [
        "distance",
        "message"
      ],
    "properties": {
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