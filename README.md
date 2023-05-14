# vueling-server
Back-end for [vueling-destino](https://github.com/19IvanL/vueling-destino), a HackUPC 2023 project for Vueling.

## Running the project
```console
npm install
node app.js
```
You'll also need a MongoDB database (local by default) with a `ranking` collection and the following JSON structure:
```json
[
  {
    "nombre": "Carla",
    "puntos": 100
  },
  {
    "nombre": "Carlos",
    "puntos": 85
  },
  {
    "nombre": "Daniel",
    "puntos": 70
  }
]
```
