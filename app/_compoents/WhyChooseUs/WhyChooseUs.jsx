export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Why Choose Car Hub
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3z" />
            </svg>
            <h3 className="text-xl font-semibold">Wide Selection</h3>
            <p className="text-center text-gray-400 mt-2">
              Choose from a vast collection of vehicles, from luxury to economy.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4m0 0v4m0-4h4m-4 0H8"></path>
            </svg>
            <h3 className="text-xl font-semibold">Affordable Prices</h3>
            <p className="text-center text-gray-400 mt-2">
              Competitive pricing ensures you get the best value for your money.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-blue-500 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z"></path>
            </svg>
            <h3 className="text-xl font-semibold">Trusted Service</h3>
            <p className="text-center text-gray-400 mt-2">
              We’re committed to providing reliable and professional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
