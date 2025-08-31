import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ProductsGrid from '@/components/sections/ProductsGrid';

export default function OilsDisinfectantsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <ProductsGrid category="oils-disinfectants" />
      </div>
      <Footer />
    </main>
  );
}