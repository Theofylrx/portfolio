import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata = {
  title: 'Likho Bomvana - Portfolio',
  description: 'Personal portfolio of Likho Bomvana',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}