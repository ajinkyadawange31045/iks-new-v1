import './globals.css';
import { LayoutShell } from '@/components/LayoutShell';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'IKS Centre for Maritime & Artistic Traditions',
  description: 'Exploring and preserving the rich heritage of Indian knowledge systems',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-serif-body">
        <LayoutShell>{children}</LayoutShell>
        <Toaster />
      </body>
    </html>
  );
}
