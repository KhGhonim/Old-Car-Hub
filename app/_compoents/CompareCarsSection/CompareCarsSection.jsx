import Link from "next/link";
import { MdKeyboardArrowRight, MdPreview } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";

export default function CompareCarsSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-50 py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Background blur with glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 opacity-80 blur-lg"></div>

        {/* Content Box */}
        <div className="bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <div className="p-8">
            {/* Title */}
            <h2
              className="text-4xl font-extrabold text-center mb-6 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              Compare Cars Side by Side
            </h2>
            {/* Description */}
            <p
              className="text-xl text-center mb-6 animate-fadeInUp text-gray-300"
              style={{ animationDelay: "0.4s" }}
            >
              Make an informed decision by comparing features, specs, and prices
              of different car models.
            </p>

            {/* Features */}
            <div
              className="flex flex-col md:flex-row justify-center gap-8 mb-8 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { text: "Side-by-side comparison", icon : <FaBalanceScale className="h-6 w-6 mr-3 text-gray-50" /> },
                { text: "Detailed specifications", icon : <FaCarRear  className="h-6 w-6 mr-3 text-emerald-500" /> },
                { text: "Unbiased reviews", icon : <MdPreview  className="h-6 w-6 mr-3 text-red-500" /> },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center hover:scale-105 transform transition duration-300 ease-in-out"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Call-to-Action Button */}
            <div className="flex justify-center">
              <Link href="/compare">
                <p className="inline-flex items-center bg-primary text-white hover:bg-primary-dark py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg transform hover:scale-110">
                  Start Comparing Now
                  <MdKeyboardArrowRight className="ml-2 h-5 w-5" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-br from-primary to-primary/20 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-secondary to-secondary/20 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
}
