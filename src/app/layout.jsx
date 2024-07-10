import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import './globals.css';

export default function Layout ({ children }) {

  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col items-center">
        <Navbar />
          <main className="flex-grow w-8/12">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
};