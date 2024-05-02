Tecnologías utilizadas:

Node.js: Plataforma de ejecución de JavaScript.
Express.js: Framework web de Node.js para simplificar la creación de API RESTful.
Características:

Obtener lista de usuarios:
Método HTTP: GET
Ruta: /api/users
Descripción: Este endpoint devuelve una lista de usuarios.
Respuesta exitosa:
Código de estado: 200 OK
Cuerpo de la respuesta: Un array JSON con objetos de usuario.

Agregar un nuevo usuario:
Método HTTP: POST
Ruta: /api/users
Descripción: Este endpoint permite agregar un nuevo usuario.
Cuerpo de la solicitud: Un objeto JSON con los datos del nuevo usuario (nombre y correo electrónico).
Respuesta exitosa:
Código de estado: 201 Created
Cuerpo de la respuesta: El objeto JSON del usuario recién creado, incluyendo su ID.
