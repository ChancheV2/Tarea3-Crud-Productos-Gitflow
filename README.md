# CRUD de productos

Inventario de productos hecho con React, TypeScript y Vite. Permite crear, listar, editar y eliminar productos, y guarda los datos en el `localStorage` del navegador, así que no necesita backend.

Tarea 3 de Programación 3 (ITLA): uso de Git y Git Flow.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego se abre http://localhost:5173 en el navegador.

## Flujo de ramas

El repositorio tiene tres ramas permanentes: `dev` para integrar el desarrollo, `qa` para pruebas y `main` para la versión estable. Cada funcionalidad se trabajó en su propia rama y pasó por un pull request hacia `dev`, otro hacia `qa` y otro hacia `main`.

| Rama | Contenido |
|---|---|
| `feature/product-list` | Tipos, almacenamiento en localStorage y tabla de productos |
| `feature/create-product` | Formulario para agregar productos con validaciones |
| `feature/edit-product` | Edición de productos desde la tabla |
| `feature/delete-product` | Eliminación con confirmación |
| `hotfix/fix-price-format` | Corrige el formato del precio a RD$ con dos decimales |
