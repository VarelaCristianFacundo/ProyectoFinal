**Auth para role de admin**
*En el header colocar el clave valor: Role: 'admin'*

**Routes de productos**
*GETS(Para traer todos los productos y para traer un producto por ID)*
http://localhost:8080/api/productos
http://localhost:8080/api/productos/1

*POST (Para agregar un producto es necesario ser ADMIN, Hay que pasar por Header el Role = admin)*
http://localhost:8080/api/productos/

**Routes de Carrito**
*POST (Creo un nuevo carrito)*
http://localhost:8080/api/carrito/

*DELETE (Elimino un carrito)*
http://localhost:8080/api/carrito/7

*GET (Traigo los productos del carrito por su ID)*
http://localhost:8080/api/carrito/2/productos

*POST (Agrego un producto al carrito por su ID)*
http://localhost:8080/api/carrito/2/productos

*DELETE (Elimino un producto del carrito por su ID)*
http://localhost:8080/api/carrito/2/productos/1