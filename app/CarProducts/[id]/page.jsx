import { notFound } from "next/navigation";
import Navbar from "../../_compoents/Navbar";
import Footer from "../../_compoents/Footer";
import CarCart from "../CarCart";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}/${id}`, {
    cache: "no-store",
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.name,
    description: `${data.name} + ${data.isAutomatic} + ${data.tireType} + ${data.fuelUsage} + ${data.dailyRent}`,
    icons: {
      icon: "/images/KGlogo.png",
    },
  };
}

export default async function page({ params }) {
  const data = await getData(params.id);

  return (
    <div className="bg-[--background-color]">
      <Navbar />
      {data ? (
        <CarCart data={data} />
      ) : (
        <div className="relative py-32 bg-gray-200 animate-pulse">
          <nav className="flex my-3">
            <ol className="flex overflow-hidden rounded-lg border border-gray-400 animate-pulse">
              <li className="flex items-center">
                <div className="flex items-center h-10 bg-gray-300 animate-pulse"></div>
              </li>
              <li className="flex relative items-center">
                <div className="absolute h-10 w-4 bg-gray-300 animate-pulse"></div>
                <div className="flex items-center h-10 animate-pulse"></div>
              </li>
            </ol>
          </nav>
          <div className="absolute top-12 right-4 z-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="flex justify-around items-center w-screen h-full animate-pulse">
            <div>
              <div className="animate-pulse w-96 h-64 bg-gray-300"></div>
            </div>
            <div className="relative border border-gray-300 animate-pulse bg-gray-200 p-6 w-96">
              <span className="whitespace-nowrap bg-gray-300 animate-pulse px-5 py-2"></span>
              <h3 className="mt-4 animate-pulse bg-gray-300 h-6 w-3/4"></h3>
              <div className="flex justify-around items-center my-4 w-full">
                <p className="mt-1.5 animate-pulse bg-gray-300 h-4 w-1/3"></p>
                <p className="mt-1.5 animate-pulse bg-gray-300 h-4 w-1/3"></p>
              </div>
              <button
                type="submit"
                className="w-full mt-4 rounded bg-gray-300 animate-pulse p-4"
              ></button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
