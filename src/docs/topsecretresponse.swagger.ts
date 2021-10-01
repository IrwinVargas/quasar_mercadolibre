export const TopSecretresponse = {
    "type": "object",
    "required": [
        "name",
        "distance",
        "message"
      ],
    "properties": {
        "position": {
            "$ref": "#/components/schemas/Position"
        },
        "message": {
        "type": "string",
        "example": "este es un mensaje secreto"
        }
    }
}