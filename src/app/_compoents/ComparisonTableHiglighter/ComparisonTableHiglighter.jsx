import { useTranslations } from "next-intl";

export default function ComparisonTableHiglighter({ selectedCars }) {
  const t = useTranslations();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{t("featureHighlights")}</h2>
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
                    {carId.name} {t("highlights")}
                  </h3>
                </div>

                {/* Card Content */}
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 h-5 w-5 text-primary mt-0.5">👍</span>
                    <span>
                      {t("advancedSafetyFeatures")} 
                      {/* <span>{carId.safety}{" "}</span> */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 h-5 w-5 text-primary mt-0.5">👍</span>
                    <span>
                      {t("impressiveRange")} 
                      {/* <span>{carId.range}</span> */}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 h-5 w-5 text-primary mt-0.5">👍</span>
                    <span>
                      {t("powerfulPerformance")}
                       {/* <span>{carId.acceleration}</span> */}
                    
                    </span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-red-500">
          {t("pleaseSelectAtLeastTwoCars")}
        </div>
      )}
    </section>
  );
}
