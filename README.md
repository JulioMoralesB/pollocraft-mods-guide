# Guía del servidor — Pollocraft

Sitio web estático con la guía del servidor de Minecraft **Pollocraft**:
qué hace cada mod y qué hace cada tecla, el mouse y el control.

Pensado para que alguien que se une al servidor entienda todo sin saber nada
técnico.

## Contenido

| Página | Qué muestra |
| --- | --- |
| `index.html` | Los 160 mods del servidor, con buscador, categorías, relaciones entre ellos y enlace a Modrinth. |
| `keybinds.html` | Teclado, mouse y control en diagramas interactivos: pasas el cursor por una tecla y te dice qué hace. |

## Cómo verlo

Es HTML/CSS/JS puro, sin dependencias ni compilación. Basta con abrir
`index.html` en el navegador.

Para que funcione igual que en producción (algunos navegadores restringen
archivos locales), levanta un servidor sencillo:

```bash
python -m http.server 8000
```

Y entra a `http://localhost:8000`.

## Cómo publicarlo

Al ser estático, se sube tal cual a cualquier hosting: Nginx, Apache, GitHub
Pages, Cloudflare Pages, Netlify… No necesita backend ni base de datos.

## Los datos

Estos tres archivos se generan a partir de la instalación real del modpack, no
se escriben a mano:

| Archivo | De dónde sale |
| --- | --- |
| `data.js` | El `fabric.mod.json` dentro de cada `.jar` de la carpeta `mods`, más los enlaces de Modrinth sacados de la base de datos del launcher. |
| `keybinds-data.js` y `key-bindings-data.js` | El `options.txt` del perfil, con los nombres traducidos usando los archivos de idioma de cada mod. |
| `controller-data.js` | El `controlify.json` del perfil, más los valores por defecto del mod Controlify. |

> **Importante:** cada vez que actives/desactives un mod o cambies una tecla en
> el juego, estos archivos quedan desactualizados y hay que regenerarlos. Si no,
> la guía dirá cosas que ya no son ciertas.

## Estructura

```
index.html          Página de mods
keybinds.html       Página de controles
style.css           Estilos base y paleta (temas claro y oscuro)
keybinds.css        Estilos de la página de controles
keyboard.css        Diagramas de teclado, mouse y control
script.js           Lógica de la página de mods
keybinds.js         Buscador de acciones
keyboard.js         Teclado y mouse interactivos
keyboard-layout.js  Distribución física del teclado (español latinoamericano)
controller.js       Control interactivo
hint.js             Tarjetas flotantes que aparecen al pasar el cursor
```
