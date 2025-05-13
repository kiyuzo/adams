import { NavigationProvider } from '@/context/NavigationContext';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
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
          <Navbar />
          <main className="flex-grow pb-16 overflow-y-auto">
            {children}
          </main>
          <Footer />
        </NavigationProvider>
      </body>
    </html>
  );
}