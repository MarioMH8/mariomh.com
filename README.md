<h1 align="center">
  mariomh.com
</h1>

<p align="center">
    Portfolio personal
</p>

![mariomh-portfolio](docs/mriomh.com.webp)

## Tecnologías

- **Runtime** - [Bun](https://bun.sh)
- **Frontend** - [Astro](https://astro.build/)
- **Styling** - [TailwindCSS](https://tailwindcss.com/)
- **Deployment** - [Firebase](https://firebase.google.com/)
- **Languages** - [TypeScript](https://www.typescriptlang.org/)

## Ejecutar proyecto

Clonar el proyecto

```bash
git clone https://github.com/MarioMH8/mariomh.com.git
```

Acceder al directorio del proyecto

```bash
cd mariomh.com
```

Crea el archivo `.env` con las [variables de entorno](#variables-de-entorno)

**.env**

```.dotenv
PUBLIC_FIREBASE_API_KEY=REDACTED
PUBLIC_FIREBASE_APP_ID=1:777228830069:web:43848397f5a0f7b8997f3c
PUBLIC_FIREBASE_AUTH_DOMAIN=mariomh-com.firebaseapp.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=777228830069
PUBLIC_FIREBASE_STORAGE_BUCKET=mariomh-com.appspot.com
PUBLIC_FIREBASE_PROJECT=mariomh-com
PUBLIC_RECAPTCHA_SITE_KEY=6LdCrFApAAAAAPZWjDrinEIlt4-gQVNX3TQTjuyS
PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN=f7fa6ff0-a746-4ba0-936b-57366f12bba9
PUBLIC_FIREBASE_FUNCTIONS_SEND_MAIL=http://127.0.0.1:5001/mariomh-com/europe-west1/mail-send
```

La primera instalación tendrás que actualizar el valor de `$TOKEN` del archivo [bunfig.toml](bunfig.toml)
con el valor que devuelve el commando:

> Debes de estar autenticado con `gcloud` con un usuario que tenga acceso al proyecto [Google Cloud](https://console.cloud.google.com/home/dashboard?project=mariomh-com).

```bash
gcloud auth print-access-token
```

Instalar dependencias

```bash
bun install
```

Ejecutar servidor

```bash
bun dev
```

## Desplegar proyecto

Accede a la GitHub Action [Deploy to Firebase](https://github.com/MarioMH8/mariomh.com/actions/workflows/firebase-deploy.yml) y ejecuta el workflow.

## Estructura del proyecto

El proyecto está organizado en varios directorios y archivos principales:

- `src/`: Este directorio contiene todo el código fuente del proyecto.
  - `assets/`: Contiene las imágenes del proyecto que se procesan y optimizan con Astro.
  - `components/`: Contiene los componentes de Astro que se utilizan en varias partes de la aplicación.
  - `content/`: Configuración del contenido de Astro.
  - `features/`: Contiene los componentes específicos del proyecto.
  - `layouts/`: Contiene el layout base de la página.
  - `pages/`: Contiene los componentes de Astro que representan las páginas de la aplicación.
- `public/`: Este directorio contiene todos los archivos estáticos.

## Variables de entorno

- `PUBLIC_FIREBASE_API_KEY`: API Key de Firebase
- `PUBLIC_FIREBASE_APP_ID`: ID de la aplicación de Firebase
- `PUBLIC_FIREBASE_AUTH_DOMAIN`: Dominio de autenticación de Firebase
- `PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: ID de mensajería de Firebase
- `PUBLIC_FIREBASE_STORAGE_BUCKET`: Bucket de almacenamiento de Firebase
- `PUBLIC_FIREBASE_PROJECT`: ID del proyecto de Firebase
- `PUBLIC_RECAPTCHA_SITE_KEY`: Site Key de reCAPTCHA
- `PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN`: Token de debug de Firebase App Check
- `PUBLIC_FIREBASE_FUNCTIONS_SEND_MAIL`: URL de la función de Firebase para enviar mails
