# Ecoenergy — sitio web

Sitio institucional de **Ecoenergy**, instalación de energía solar en Funes, Roldán y Rosario.
Hecho con [React](https://react.dev) + [Vite](https://vite.dev).

## Correr en tu compu

```bash
npm install
npm run dev      # abre http://localhost:5173
npm run build    # genera la carpeta dist/
```

## Editar el contenido

Todos los textos (servicios, pasos, preguntas, teléfono, Instagram, zona) están en
`src/data/site.js`. Cambiás ahí y se actualiza todo el sitio.

## Estructura

```
src/
  data/site.js            datos del negocio
  components/Header.jsx   barra de navegación con menú móvil
  components/Hero.jsx     portada + ilustración SVG
  components/Secciones.jsx beneficios, servicios, pasos, calculadora, FAQ, contacto, footer
  index.css               estilos (variables de color en :root)
```

## Publicar en GitHub Pages

1. Subí el proyecto a un repo en GitHub (rama `main`).
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Cada `push` a `main` publica el sitio automáticamente (ver `.github/workflows/deploy.yml`).
