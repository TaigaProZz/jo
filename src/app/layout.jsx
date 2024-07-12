import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import './globals.css';

async function fetchUser() {
  
}

export default function Layout ({ children }) {

  return (
    <html lang="fr">
      <title>JO 2024 Paris</title>
      <meta name="description" content="Site des jo 2024 de ventes de tickets / billet , projet réalisé dans un but scolaire." />
      <link rel="preload" as="image" href="./public/assets/bg/hero-section.svg" />
 
      <body className="min-h-screen flex flex-col items-center bg-radial-custom-gradient">
        <Navbar />
          <main className="flex-grow w-full p-6 md:w-10/12 mb-16">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
};