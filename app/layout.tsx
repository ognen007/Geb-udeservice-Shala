import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gebäudeservice Shala | Mauerarbeiten in Karlsruhe',
  description: 'Professionelle Mauerarbeiten und Baudienstleistungen in Karlsruhe und Umgebung. Qualität und Zuverlässigkeit seit Jahren.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
