import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import './globals.css';

export default function Layout ({ children }) {

  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};