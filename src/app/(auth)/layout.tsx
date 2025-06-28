import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './../globals.css';
import { APP_CONFIG } from '@/config/app';

const fontSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${APP_CONFIG.name} | Login`,
  description: APP_CONFIG.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <main className="h-screen w-screen flex items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
