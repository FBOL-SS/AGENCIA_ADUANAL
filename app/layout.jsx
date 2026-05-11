import "./globals.css";

export const metadata = {
  title: "ALPHA LOGISTICS",
  description: "Agencia de aduanas y logística en El Salvador",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
