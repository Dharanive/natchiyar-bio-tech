import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crop Chemicals - Premium Agricultural Solutions',
  description: 'Leading provider of innovative agricultural chemicals, fertilizers, and farming solutions for enhanced crop productivity and sustainable agriculture.',
  keywords: 'agriculture, fertilizers, pesticides, farming, crop chemicals, agricultural solutions',
  authors: [{ name: 'Crop Chemicals' }],
  openGraph: {
    title: 'Crop Chemicals - Premium Agricultural Solutions',
    description: 'Leading provider of innovative agricultural chemicals and farming solutions',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}