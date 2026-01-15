export const metadata = {
  title: 'ROOT5 TCG - The Fifth Root',
  description: '3D Game Center - Work in Progress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}
