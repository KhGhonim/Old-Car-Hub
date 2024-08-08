import Image from "next/image";
import Link from "next/link";

export default function Card({
  name,
  isAutomatic,
  tireType,
  fuelUsage,
  dailyRent,
  image,
  id,
}) {
  return (
    <article className="overflow-hidden rounded-2xl  hover:shadow-2xl w-96 p-6 m-4 bg-slate-200 shadow-xl transition-all hover:shadow-slate-400  cursor-pointer flex justify-between flex-col">
      <Link href={`/CarProducts/${id}`}>
        <h1 className="block font-semibold text-center text-gray-500 mb-3 text-xl">
          {" "}
          {name}{" "}
        </h1>
        <p className=" font-extrabold text-base">
          {dailyRent}
          <span className=" text-sm">/Day</span>
        </p>

        <Image
          alt=""
          src={image}
          className=" object-cover"
          width={350}
          height={50}
          priority
          quality={100}
        />

        <div className=" bg-transparent p-4 md:p-6 flex justify-between items-center  ">
          <div className="flex justify-between items-center flex-col h-full gap-4">
            <Image
              src={"/images/tire.png"}
              alt={name}
              width={20}
              height={20}
              quality={100}
              priority={true}
            />
            <p>{isAutomatic}</p>
          </div>
          <div className="flex justify-between items-center flex-col h-full gap-4">
            <Image
              src={"/images/wheel-card.png"}
              alt={name}
              width={20}
              height={20}
              quality={100}
              priority={true}
            />
            <p>{tireType}</p>
          </div>
          <div className="flex justify-between items-center flex-col h-full gap-4">
            <Image
              src={"/images/Oil-Gasoline-Fuel-icon.png"}
              alt={name}
              width={20}
              height={20}
              quality={100}
              priority={true}
            />
            <p>{fuelUsage}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
