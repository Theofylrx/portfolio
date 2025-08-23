import React from 'react';
import { HeaderSection } from '@/components/organisms/HeaderSection';
import { FooterSection } from '@/components/organisms/FooterSection';
import { ThemeProvider } from '@/components/theme-provider';
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <HeaderSection />
          <main>{children}</main>
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}