
https://github.com/jeshu1812/otra_nueva_siete.git
Las URL utilizadas estan en mi archivo server.js

1_Crear los siguientes usuarios:
firstName lastName email
Mateo Díaz mateo.diaz@correo.com
Santiago Mejías santiago.mejias@correo.com
Lucas Rojas lucas.rojas@correo.com
Facundo Fernandez facundo.fernandez@correo.com
R: quedaron ingresados, al realizar las otras operaciones se actualizo Mateo y luego se elimino el id1

[
  {
    "id": 2,
    "firstName": "Santiago",
    "lastName": "Mejias",
    "email": "santiago.mejias@correo.com",
    "createdAt": "2023-08-23T01:16:18.592Z",
    "updatedAt": "2023-08-23T01:16:18.592Z"
  },
  {
    "id": 3,
    "firstName": "Lucas",
    "lastName": "Rojas",
    "email": "lucas.rojas@correo.com",
    "createdAt": "2023-08-23T01:16:45.438Z",
    "updatedAt": "2023-08-23T01:16:45.438Z"
  },
  {
    "id": 4,
    "firstName": "Facundo",
    "lastName": "Fernandez",
    "email": "facundo.fernandez@correo.com",
    "createdAt": "2023-08-23T01:17:15.473Z",
    "updatedAt": "2023-08-23T01:17:15.473Z"
  }
]

2_ Crear los siguientes Bootcamp:
title cue description
Introduciendo El Bootcamp De React. 10 React es la librería más usada en 
JavaScript para el desarrollo de 
interfaces.
Bootcamp Desarrollo Web Full Stack. 12 Crearás aplicaciones web utilizando 
las tecnologías y lenguajes más 
actuales y populares, como: 
JavaScript, nodeJS, Angular, 
MongoDB, ExpressJS.
Bootcamp Big Data, Inteligencia 
Artificial & Machine Learning.
18 Domina Data Science, y todo el 
ecosistema de lenguajes y 
herramientas de Big Data, e 
intégralos con modelos avanzados
de Artificial Intelligence y Machine 
Learning.
R: se ingresaron los bootcamps
[
  {
    "id": 2,
    "title": "Bootcamp Desarrollo Web Full Stack.",
    "cue": 12,
    "description": "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular,MongoDB, ExpressJS.",
    "createdAt": "2023-08-23T01:20:37.560Z",
    "updatedAt": "2023-08-23T01:20:37.560Z",
    "Users": [
      {
        "id": 2,
        "firstName": "Santiago",
        "lastName": "Mejias",
        "email": "santiago.mejias@correo.com",
        "createdAt": "2023-08-23T01:16:18.592Z",
        "updatedAt": "2023-08-23T01:16:18.592Z",
        "BootcampUser": {
          "UserId": 2,
          "BootcampId": 2,
          "createdAt": "2023-08-23T16:33:41.046Z",
          "updatedAt": "2023-08-23T16:33:41.046Z"
        }
      }
    ]
  },
  {
    "id": 3,
    "title": "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
    "cue": 18,
    "description": "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning",
    "createdAt": "2023-08-23T01:21:25.907Z",
    "updatedAt": "2023-08-23T01:21:25.907Z",
    "Users": [
      {
        "id": 2,
        "firstName": "Santiago",
        "lastName": "Mejias",
        "email": "santiago.mejias@correo.com",
        "createdAt": "2023-08-23T01:16:18.592Z",
        "updatedAt": "2023-08-23T01:16:18.592Z",
        "BootcampUser": {
          "UserId": 2,
          "BootcampId": 3,
          "createdAt": "2023-08-23T16:54:19.380Z",
          "updatedAt": "2023-08-23T16:54:19.380Z"
        }
      },
      {
        "id": 3,
        "firstName": "Lucas",
        "lastName": "Rojas",
        "email": "lucas.rojas@correo.com",
        "createdAt": "2023-08-23T01:16:45.438Z",
        "updatedAt": "2023-08-23T01:16:45.438Z",
        "BootcampUser": {
          "UserId": 3,
          "BootcampId": 3,
          "createdAt": "2023-08-23T16:54:31.687Z",
          "updatedAt": "2023-08-23T16:54:31.687Z"
        }
      }
    ]
  },
  {
    "id": 1,
    "title": "Introduciendo El Bootcamp De React",
    "cue": 10,
    "description": "React es la librería más usada enJavaScript para el desarrollo de interfaces",
    "createdAt": "2023-08-23T01:18:24.012Z",
    "updatedAt": "2023-08-23T01:18:24.012Z",
    "Users": []
  }
]

3_Agregar los siguientes usuarios al Bootcamp:
title usuarios
Introduciendo El Bootcamp De React. Mateo Díaz
Santiago Mejías
Bootcamp Desarrollo Web Full Stack. Mateo Díaz
Bootcamp Big Data, Inteligencia Artificial & 
Machine Learning.
Mateo Díaz
Santiago Mejías
Lucas Rojas
R: relacione las tablas, logre ingresar pero por el numero de ID
[
  {
    "UserId": 2,
    "BootcampId": 2,
    "createdAt": "2023-08-23T16:33:41.046Z",
    "updatedAt": "2023-08-23T16:33:41.046Z"
  },
  {
    "UserId": 2,
    "BootcampId": 3,
    "createdAt": "2023-08-23T16:54:19.380Z",
    "updatedAt": "2023-08-23T16:54:19.380Z"
  },
  {
    "UserId": 3,
    "BootcampId": 3,
    "createdAt": "2023-08-23T16:54:31.687Z",
    "updatedAt": "2023-08-23T16:54:31.687Z"
  }
]


Realizar las siguientes consultas:
• Consultando el Bootcamp por id, incluyendo los usuarios.
r: GET http://localhost:3000/bootcamps/1
r: GET http://localhost:3000/users/1

• Listar todos los Bootcamp con sus usuarios.

• Listar todos los Bootcamp.
r:GET http://localhost:3000/bootcamps

• Consultar un usuario por id, incluyendo los Bootcamp.
• Listar los usuarios con sus Bootcamp.
r: GET http://localhost:3000/users

• Actualizar el usuario según su id; por ejemplo: actualizar el usuario con id=1 por Pedro 
Sánchez.
r: PUT: http://localhost:3000/users/1
{
      "firstName": "Pedro",
      "lastName": "Sánchez"
    }


• Eliminar un usuario por id; por ejemplo: el usuario con id=1
r: DELETE http://localhost:3000/users/1