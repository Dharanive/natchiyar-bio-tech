import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ProductsGrid from '@/components/sections/ProductsGrid';

export default function InsecticidesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <ProductsGrid category="insecticides" />
      </div>
      <Footer />
    </main>
  );
}