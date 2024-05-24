import { notFound } from "next/navigation";
import { MdFavoriteBorder } from "react-icons/md";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import Navbar from "../../_compoents/Navbar";
import Footer from "../../_compoents/Footer";

async function getData(id) {
  const res = await fetch(`http://localhost:4000/products/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
export default async function page({ params, isSmScren = false }) {
  const data = await getData(params.id);

  return (
    <div>
      <Navbar />
      <div className="group relative py-32 overflow-hidden h-dvh ml-3 mb-3">
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

        <button className="absolute end-4 top-12 z-10 rounded-full bg-white py-20 pr-5 text-gray-900 transition hover:scale-110 hover:text-red-500/75">
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
      <Footer />
    </div>
  );
}
