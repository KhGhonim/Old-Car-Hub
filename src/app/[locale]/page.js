import CallToAction from "app/_compoents/CallToAction/CallToAction";
import CarModelNames from "app/_compoents/CarModelNames";
import CompareCarsSection from "app/_compoents/CompareCarsSection/CompareCarsSection";
import FavouriteClient from "app/_compoents/FavouriteClient";
import HeroSection from "app/_compoents/HeroSection";
import CustomerTestimonials from "app/_compoents/WhyChooseCarHub/WhyChooseCarHub";
import WhyChooseUs from "app/_compoents/WhyChooseUs/WhyChooseUs";
import { Toaster } from "react-hot-toast";


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
