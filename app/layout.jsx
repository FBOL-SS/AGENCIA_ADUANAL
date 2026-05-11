import './globals.css'

export const metadata = {
  title: 'ALPHA LOGISTICS | Agencia de Aduanas y Logística en El Salvador',
  description: 'Trámites aduanales DUCA, courier internacional, puerto de Acajutla, aeropuerto SAL, zonas francas y planes corporativos en El Salvador.',
  keywords: ['agencia de aduanas El Salvador', 'DUCA', 'Puerto de Acajutla', 'Aeropuerto SAL', 'courier El Salvador', 'zonas francas'],
  openGraph: {
    title: 'ALPHA LOGISTICS',
    description: 'Gestión aduanal rápida, seria y accesible en El Salvador.',
    type: 'website',
    locale: 'es_SV'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
