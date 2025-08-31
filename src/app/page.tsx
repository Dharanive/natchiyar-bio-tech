import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Testimonials from '@/components/sections/Testimonials';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contacts';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Products />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}