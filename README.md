# ALPHA LOGISTICS — Next.js Website

Sitio corporativo para agencia de aduanas y logística en El Salvador.

## Correr localmente

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Deploy en Vercel

Configuración recomendada:

- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: **dejar vacío**

Este proyecto incluye `vercel.json` para que Vercel lo detecte como Next.js.

## Importante

No configurar `public` como Output Directory. En Next.js, `public/` es solo carpeta de archivos estáticos, no la salida del build.
