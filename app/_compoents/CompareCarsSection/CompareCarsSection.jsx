import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

export default function CompareCarsSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-50 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-4xl font-extrabold text-center mb-6">
              Compare Cars Side by Side
            </h2>
            <p className="text-xl text-center mb-6">
              Make an informed decision by comparing features, specs, and prices
              of different car models.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center">
                <FaBalanceScale className="h-6 w-6 mr-3 text-primary" />
                <span>Side-by-side comparison</span>
              </div>
              <div className="flex items-center">
                <FaBalanceScale className="h-6 w-6 mr-3 text-primary" />
                <span>Detailed specifications</span>
              </div>
              <div className="flex items-center">
                <FaBalanceScale className="h-6 w-6 mr-3 text-primary" />
                <span>Unbiased reviews</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/compare">
                <p className="inline-flex items-center bg-primary text-white hover:bg-primary-dark py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg transform hover:FaBalanceScale -105">
                  Start Comparing Now
                  <MdKeyboardArrowRight className="ml-2 h-5 w-5" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
