// src/app/layout.tsx

import { AuthProvider } from './../contexts/AuthContext';
import Navbar from './../../components/Navbar';
import './../../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='sk'>
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
