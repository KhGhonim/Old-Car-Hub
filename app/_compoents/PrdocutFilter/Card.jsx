import Image from "next/image";

export default function Card({
  name,
  isAutomatic,
  tireType,
  fuelUsage,
  dailyRent,
}) {
  return (
    <article className="overflow-hidden rounded-2xl shadow transition hover:shadow-2xl w-96 p-6 m-4 ">
      <time
        dateTime="2022-10-10"
        className="block font-semibold text-center text-gray-500 mb-3"
      >
        {" "}
        {name}{" "}
      </time>
      <p className=" font-extrabold">{dailyRent}</p>

      <Image
        alt=""
        src="/images/car.png"
        className=" object-cover"
        width={350}
        height={50}
        priority
        quality={100}
      />

      <div className="bg-white p-4 sm:p-6 flex justify-between items-center  ">
        <div className="flex justify-between items-center flex-col h-full gap-4">
          <Image
            src={"/images/tire.png"}
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
    </article>
  );
}
