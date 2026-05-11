import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'ALPHA LOGISTICS | Agencia de Aduanas y Logística en El Salvador',
  description: 'Gestión aduanal, DUCA, tránsitos, courier, puerto de Acajutla, aeropuerto SAL y zonas francas en El Salvador.',
  keywords: ['agencia aduanal El Salvador', 'DUCA', 'tránsitos de carga', 'Puerto de Acajutla', 'Aeropuerto SAL', 'zonas francas El Salvador', 'courier internacional'],
  openGraph: {
    title: 'ALPHA LOGISTICS | Gestión aduanal rápida y confiable',
    description: 'Aduanas, logística y comercio internacional para empresas y personas naturales en El Salvador.',
    type: 'website',
    locale: 'es_SV'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
