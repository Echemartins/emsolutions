import type { Metadata } from 'next';
import './globals.css';
import './interactions.css';

export const metadata: Metadata = {
  title: 'Uchendu Martins Echezona — Software Engineer | emsolutions',
  applicationName: 'emsolutions',
  appleWebApp: { title: 'emsolutions' },
  description: 'Uchendu Martins Echezona, the software engineer behind emsolutions. Explore web and mobile projects, thoughtful interfaces, and dependable systems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
