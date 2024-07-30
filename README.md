# Jemersoft [Prueba técnica]

## Deploy en Vercel

Para visitar el deploy en vercel, [hacer click aquí.](https://jemersoft-test.vercel.app/)

## Instalar el proyecto

Para correr el proyecto en local, se debe realizar:

```bash
npm install
npm run dev

```

Abrir [http://localhost:3000](http://localhost:5173/) con tu navegador.

## Requisitos de la prueba

Se requiere construir una SPA Web App a desarrollar en Vue js / React Js / Angular que exponga la información al Pokedex. (Según la posición a aplicar)

Esta Web App debe consumir el servicio externo PokeApi https://pokeapi.co/ para obtener la información. La documentación la puedes encontrar en https://pokeapi.co/docs/v2.

El home de dicha web debe ser una página donde se listan los pokemons inicialmente mostrando la siguiente información (información básica):

- Foto (url)
- Tipo (type)
- Peso (weight)

Cuando el usuario haga click en alguno de los pokemons, se muestra una pantalla con más detalles del pokemon seleccionado:

- Información Básica (devuelta en la lista de pokemons)
- Descripción (en español)
- Lista de Movimientos (campo name en moves)

El código de la aplicación debe estar alojado en algún repositorio Git al que debes darnos acceso.

## Sobre el proyecto

Para realizar esta prueba técnica, utilicé la última versión de Vue con Vite junto a TypeScript para más prolijidad. La prueba hace peticiones asíncronas a la API de Pokemon, consta con skeletons, manejo de mensajes de error, rutas, paginado entre demás features.

Traté de hacer un diseño simple, minimalista y atractivo. Los estilos están hechos con CSS puro y no se utilizó ninguna librería de componentes o de clases como Bootstrap o Tailwind. Hice mis propios componentes e hice uso de ramas de Github para mantener un flujo de trabajo ordenado.

Librerías que si utilicé:

- Axios para peticiones asincronas.
- Vue-Router para manejo de rutas.
- Oh-Vue-Icons.
- Vue-Sonner para pequeñas alertas en caso de errores.
