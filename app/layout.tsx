import './globals.css'

export const metadata = {
  title: 'CLINICA DENTARA DR. GHEORGHIADE',
  description: 'Servicii stomatologice complete: implantologie, estetică dentară, ortodonție, endodonție, protetică și pedodonție.',
  keywords: 'dentist, stomatologie, implantologie, ortodonție, estetică dentară, Craiova',
  authors: [{ name: 'CLINICA DENTARA DR. GHEORGHIADE' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  openGraph: {
    title: 'CLINICA DENTARA DR. GHEORGHIADE',
    description: 'Servicii stomatologice complete pentru un zâmbet sănătos',
    url: 'https://drgheorghiade.ro',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>
        {children}
      </body>
    </html>
  )
}