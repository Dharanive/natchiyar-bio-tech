import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ProductsGrid from '@/components/sections/ProductsGrid';

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <ProductsGrid category="all" />
      </div>
      <Footer />
    </main>
  );
}