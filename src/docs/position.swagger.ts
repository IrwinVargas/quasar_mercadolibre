export const Position = {
    "type": "object",
    "required": [
        "x",
        "y"
      ],
    "properties": {
        "x": {
        "type": "number",
        "format": "float",
        "description": "Coordinate X",
        "example": 103.2
        },
        "y": {
        "type": "number",
        "description": "Coordinate Y",
        "format": "float",
        "example": 100.2
        }
    }
}