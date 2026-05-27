# Portfolio de Eduardo Picornell Torres

Portfolio profesional estático preparado para publicarse en GitHub Pages.

## Archivos principales

- `index.html`: estructura y contenido de la página.
- `styles.css`: estilos responsive.
- `script.js`: navegación, menú móvil y animaciones.
- `.nojekyll`: indica a GitHub Pages que sirva la web como archivos estáticos normales.

## Probar en local

```bash
python -m http.server 3000
```

Después abre:

```text
http://localhost:3000
```

También puedes usar:

```bash
npm run dev
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/eduardo048/TU_REPOSITORIO.git
git push -u origin main
```

Cambia `TU_REPOSITORIO` por el nombre real del repositorio que crees en GitHub.

## Publicar con GitHub Pages

1. Entra en tu repositorio de GitHub.
2. Abre `Settings`.
3. Entra en `Pages`.
4. En `Build and deployment`, elige `Deploy from a branch`.
5. Branch: `main`.
6. Folder: `/root`.
7. Pulsa `Save`.

GitHub publicará la web en una URL parecida a:

```text
https://eduardo048.github.io/TU_REPOSITORIO/
```

Cada vez que hagas `git push`, GitHub Pages actualizará la web.
