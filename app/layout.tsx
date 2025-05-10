import { NavigationProvider } from '@/context/NavigationContext';
import NavbarVisibility from '@/components/NavbarVisibility';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <NavigationProvider>
          {/* Only show Navbar if not on /landing */}
          <NavbarVisibility />
          <main className="flex-grow overflow-y-auto">
            {children}
          </main>
        </NavigationProvider>
      </body>
    </html>
  );
}