import { Toaster } from "react-hot-toast";
import CarModelNames from "./_compoents/CarModelNames";
import FavouriteClient from "./_compoents/FavouriteClient";
import HeroSection from "./_compoents/HeroSection";
import WhyChooseUs from "./_compoents/WhyChooseUs/WhyChooseUs";
import CustomerTestimonials from "./_compoents/WhyChooseCarHub/WhyChooseCarHub";
import CallToAction from "./_compoents/CallToAction/CallToAction";
import CompareCarsSection from "./_compoents/CompareCarsSection/CompareCarsSection";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Toaster />
      <HeroSection />
      <CarModelNames />
      <FavouriteClient />
      <CustomerTestimonials />
      <CallToAction />
      <CompareCarsSection />
      <WhyChooseUs />
    </div>
  );
}
