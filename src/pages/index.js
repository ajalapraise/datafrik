import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar/Navbar';
import { Herosection, About, Contact } from '@/components/Landingpage/LandingPage';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col p-5  space-y-5 md:px-32 md:py-10 md:space-y-10 justify-center bg-black text-white  items-center ${inter.className}`}
    >
      <Navbar />
      <Herosection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
