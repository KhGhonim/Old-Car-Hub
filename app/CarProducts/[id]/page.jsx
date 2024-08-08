import { notFound } from "next/navigation";
import { MdFavoriteBorder } from "react-icons/md";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import Navbar from "../../_compoents/Navbar";
import Footer from "../../_compoents/Footer";

async function getData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_URL}/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);

  return {
    title: data.name,
  };
}

export default async function page({ params, isSmScren = false }) {
  const data = await getData(params.id);

  return (
    <div>
      <Navbar />
      {data ? (
        <div className="group relative py-32 overflow-hidden h-dvh pl-3 max-md:mb-3 bg-[--background-color]">
          <nav aria-label="Breadcrumb" className="flex my-3 md:pl-10">
            <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
              <li className="flex items-center">
                <a
                  href="/"
                  className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                >
                  <CiHome />

                  <span className="ms-1.5 text-xs font-medium"> Home </span>
                </a>
              </li>

              <li className="relative flex items-center">
                <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

                <a
                  href="#"
                  className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                >
                  {data.name}
                </a>
              </li>
            </ol>
          </nav>

          <button className="absolute end-4 top-12 z-10 rounded-full bg-[--background-color] py-20 pr-5 text-[--text-color] transition hover:scale-110 hover:text-red-500/75">
            <MdFavoriteBorder />
          </button>

          <div
            className={`w-screen h-full  flex justify-around items-center ${
              isSmScren ? "flex-col" : "flex-wrap"
            }`}
          >
            <div>
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={350}
                quality={100}
                className=" transition duration-500 hover:scale-105 sm:h-72"
              />
            </div>

            <div className="relative border border-gray-100 bg-white p-6 w-96">
              <span className="whitespace-nowrap  bg-[--buttons-color] hover:bg-[--buttons-color-hovered] px-5 py-2 text-[--text-color] text-xs font-medium">
                {" "}
                {data.isAutomatic}
              </span>

              <h3 className="mt-4 text-lg font-extrabold text-gray-900 pl-3">
                {data.name}
              </h3>

              <div className="flex justify-around items-center my-7">
                <p className="mt-1.5 text-sm text-gray-700">{data.dailyRent}</p>
                <p className="mt-1.5 text-sm text-gray-700">{data.fuelUsage}</p>
              </div>

              <button
                type="submit"
                className="flex justify-center items-center text-[--text-color] w-full mt-4 rounded bg-[--buttons-color] hover:bg-[--buttons-color-hovered] p-4 text-sm font-medium transition hover:scale-105 "
              >
                Add to Cart <FaCartPlus className="ml-3" />
              </button>
            </div>
          </div>
        </div>
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
