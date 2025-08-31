import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ProductsGrid from '@/components/sections/ProductsGrid';

export default function PlantGrowthRegulatorsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <ProductsGrid category="plant-growth-regulators" />
      </div>
      <Footer />
    </main>
  );
}