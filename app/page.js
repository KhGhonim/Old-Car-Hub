import CarModelNames from "./_compoents/CarModelNames";
import FavouriteClient from "./_compoents/FavouriteClient";
import Footer from "./_compoents/Footer";
import HeroSection from "./_compoents/HeroSection";
import Navbar from "./_compoents/Navbar";
import ProductFilter from "./_compoents/PrdocutFilter/ProductFilterHeader";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <HeroSection />
      <CarModelNames />
      <FavouriteClient />
      <ProductFilter />
      <Footer />
    </div>
  );
}
