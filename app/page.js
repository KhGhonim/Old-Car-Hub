import CarModelNames from "./_compoents/CarModelNames";
import FavouriteClient from "./_compoents/FavouriteClient";
import HeroSection from "./_compoents/HeroSection";
import ProductFilter from "./_compoents/PrdocutFilter/ProductFilterHeader";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <HeroSection />
      <CarModelNames />
      <FavouriteClient />
      <ProductFilter />
    </div>
  );
}
