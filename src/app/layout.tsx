import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Project SBF',
  description: 'Kursus Kuliah online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gradientStyle = {
    background: 'linear-gradient(to bottom right, #1E1862, #000000, #191233)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
        {/* You can add other head elements here */}
      </head>
      <body style={gradientStyle}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
