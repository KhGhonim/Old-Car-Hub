export default function CallToAction() {
  return (
    <section className="py-16 bg-gray-50 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Car?
        </h2>
        <p className="text-xl mb-8">
          Start your search now and drive home happy.
        </p>
        <button className="bg-[--buttons-color] hover:bg-[--buttons-color] text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Browse All Cars
        </button>
      </div>
    </section>
  );
}
