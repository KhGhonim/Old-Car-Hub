import { FaStar } from "react-icons/fa";

export default function CustomerTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${
                      i * 10
                    }.jpg`} // Placeholder image
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4].map((star) => (
                    <FaStar key={star} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-4">
                  "Car Hub made finding my dream car a breeze. Their selection
                  and customer service are unmatched!"
                </p>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-600">Satisfied Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
