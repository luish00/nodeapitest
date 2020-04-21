# Simple mock api NodeJS express
Para modificar/agregar servicios modificar el archivo `./app/api/controllers.json`

Estructura de un nuevo servicio:
```json
 {
    "method":"post | get",
    "response":{
      "id": 9,
      "foo":"¡Ay papantla tus hijos vuelan!"
    },
    "responseFail":{
      "foo":""
    },
    "responseStatus": 200, 
    "url": "/api/login" 
  }
```
(Después de agregar/modificar un servicio reiniciar es necesario reiniciar el servidor)

### Setup
> * \>  `git clone https//.../nodeApiTest.git`
> * \>  `cd nodeApiTest`
> * \>  `npm install`

### Run server 
> `npm run serve`

### Configurar serve en React Native
### Android
* Modificar el archivo `./android/app/src/dev/res/xml/network_security_config.xml`
* Agregar su IP `<domain includeSubdomains="true">10.0.0.20</domain>` 
* correr el comando `yarn android-clean`