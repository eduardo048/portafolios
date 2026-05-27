# Portfolio | Eduardo Picornell Torres

Portfolio profesional desarrollado como sitio web estático para presentar mi perfil técnico, tecnologías principales, proyectos destacados y vías de contacto.

El proyecto está preparado para publicarse en **GitHub Pages** y funcionar sin backend ni proceso de build obligatorio.

## Vista general

- Diseño responsive para escritorio, tablet y móvil.
- Navegación con scroll suave.
- Secciones de presentación, perfil, tecnologías, proyectos y contacto.
- Tarjetas de proyectos con imágenes reales extraídas de los propios repositorios.
- Enlaces directos a GitHub, LinkedIn y correo electrónico.
- Estructura simple y fácil de mantener.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git y GitHub
- GitHub Pages

## Estructura del proyecto

```text
.
+-- assets/
|   +-- projects/
+-- index.html
+-- styles.css
+-- script.js
+-- package.json
+-- package-lock.json
+-- .gitignore
+-- README.md
```

## Ejecución local

Puedes abrir directamente `index.html` en el navegador o levantar un servidor local.

Con Python:

```bash
python -m http.server 3000
```

Después abre:

```text
http://localhost:3000
```

También puedes usar el script definido en `package.json`:

```bash
npm run dev
```

## Publicación en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en `Settings`.
3. Abre la sección `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Elige la rama `main`.
6. Selecciona la carpeta `/root`.
7. Guarda los cambios.

La web quedará disponible en una URL similar a:

```text
https://eduardo048.github.io/portafolios/
```

## Contacto

- GitHub: [eduardo048](https://github.com/eduardo048)
- LinkedIn: [Eduardo Picornell Torres](https://www.linkedin.com/in/eduardo-picornell-torres-53134440a)
- Email: [eduardoedu0012@gmail.com](mailto:eduardoedu0012@gmail.com)
