import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { createTheme, ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import '@mantine/core/styles.css';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  colors: {
    brand: [
      '#FF6C78',
      '#FFAC36',
      '#FF4444',
      '#ED5DB8',
      '#F13EAF',
      '#F71FA7',
      '#FF00A1',
      '#E00890',
      '#C50E82',
      '#AD1374',
    ],
  },
  primaryColor: 'brand',
});

export const metadata: Metadata = {
  title: 'Ginko Anime North',
  description: "Menu and information on Ginko's takeout booth at Anime North.",
};

export default function RootLayout({
  children,
  Component,
  pageProps,
}: AppProps & { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
