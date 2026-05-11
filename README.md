# ALPHA LOGISTICS — Website Next.js

Sitio web corporativo para agencia de aduanas y logística en El Salvador.

## Stack

- Next.js 14
- React 18
- Tailwind CSS 3.4
- Lucide React
- Listo para Vercel

> Importante: este proyecto usa Tailwind CSS 3.4 para evitar el error de Vercel/Turbopack que ocurre cuando `tailwindcss: latest` instala Tailwind v4 sin el plugin PostCSS correcto.

## Instalación local

```bash
npm install
npm run dev
```

Abrir: http://localhost:3000

## Build local

```bash
npm run build
```

## Deploy en Vercel

1. Crear un repositorio en GitHub.
2. Subir todos los archivos del proyecto.
3. Entrar a Vercel y seleccionar **New Project**.
4. Importar el repositorio.
5. Framework: **Next.js**.
6. Build command: `npm run build`.
7. Install command: `npm install`.
8. Output: automático.
9. Deploy.

## Personalización rápida

Editar datos de contacto en `app/page.jsx`:

```js
const contact = {
  whatsapp: '50370000000',
  email: 'info@alphalogistics.com.sv'
}
```

También puedes modificar tarifas, servicios y puntos operativos en ese mismo archivo.
