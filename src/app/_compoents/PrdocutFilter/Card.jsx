import { Link } from "i18n/routing";
import Image from "next/image";

export default function Card({
  name,
  automatic,
  tire,
  fuel,
  rent,
  image,
  id,
}) {
  return (
    <article className="overflow-hidden rounded-3xl hover:shadow-2xl w-96 p-6 m-4 bg-[--card] shadow-xl transition-transform hover:scale-105 hover:shadow-gray-400 cursor-pointer flex flex-col justify-between">
      <Link href={`/CarProducts/${id}`} className="block">
        {/* Car Name */}
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          {name}
        </h1>

        {/* Car Image */}
        <div className="relative overflow-hidden rounded-2xl bg-transparent mb-6">
          <Image
            alt={name}
            src={image}
            className="object-cover w-full h-48"
            width={350}
            height={200}
            priority
            quality={100}
          />
          <p className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            ${rent}/Day
          </p>
        </div>

        {/* Features */}
        <div className="flex justify-between items-center text-center bg-transparent rounded-xl p-4 shadow-sm">
          <div className="flex flex-col items-center">
            <Image
              src="/images/tire.png"
              alt="Transmission"
              width={40}
              height={40}
              quality={100}
              priority
            />
            <p className="mt-2 text-gray-700 text-sm font-medium">
              {automatic ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/wheel-card.png"
              alt="Tire Type"
              width={40}
              height={40}
              quality={100}
              priority
            />
            <p className="mt-2 text-gray-700 text-sm font-medium">{tire}</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/Oil-Gasoline-Fuel-icon.png"
              alt="Fuel Usage"
              width={40}
              height={40}
              quality={100}
              priority
            />
            <p className="mt-2 text-gray-700 text-sm font-medium">
              {fuel}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
