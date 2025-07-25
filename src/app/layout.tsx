import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { WhatsappFab } from '@/components/whatsapp-fab';

export const metadata: Metadata = {
  title: 'Oliver Valenzuela | Learning Solutions Portfolio',
  description:
    'Portfolio of Oliver Valenzuela, specializing in creating engaging learning solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lexend:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <Toaster />
        <WhatsappFab />
      </body>
    </html>
  );
}
