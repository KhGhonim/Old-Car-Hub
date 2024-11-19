export default function ComparisonTableHiglighter({ selectedCars }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Feature Highlights</h2>
    {selectedCars.length > 0 ? (
        <div className="grid grid-cols-2 gap-8">
        {selectedCars.map((carId, i) => {
          return (
            <div
              key={carId}
              className="border rounded-lg shadow-md p-6 bg-white"
            >
              {/* Card Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold">
                  {carId.name} Highlights
                </h3>
              </div>

              {/* Card Content */}
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 h-5 w-5 text-primary mt-0.5">👍</span>
                  <span>
                    Advanced safety features with a {carId.safety}-star
                    safety rating
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 h-5 w-5 text-primary mt-0.5">👍</span>
                  <span>
                    Impressive {carId.range} range on a single
                    tank/charge
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 h-5 w-5 text-primary mt-0.5">👍</span>
                  <span>
                    Powerful performance with {carId.acceleration}{" "}
                    acceleration
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    ) : <div className="text-red-500">Please select at least two cars to see the full highlights</div>}
    </section>
  );
}
