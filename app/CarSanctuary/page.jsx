"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaHeart, FaLeaf } from "react-icons/fa";
import { MdShield } from "react-icons/md";
import { FiZap } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const [selectedCar, setSelectedCar] = useState(null);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [activeTab, setactiveTab] = useState("visit");
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const carSanctuaryData = [
    {
      id: 1,
      name: "Classic Cruiser",
      year: 1957,
      description:
        "A beautifully restored classic car that embodies the golden age of automotive.",
      image:
        "https://images.unsplash.com/photo-1532751203793-812308a10d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWxlY3RyaWMlMjBEcmVhbSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      story:
        "This Classic Cruiser was found abandoned in a barn, lovingly restored over two years, and now serves as a reminder of automotive history.",
    },
    {
      id: 2,
      name: "Electric Dream",
      year: 2023,
      description:
        "A cutting-edge electric vehicle that represents the future of sustainable transportation.",
      image:
        "https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RWxlY3RyaWMlMjBEcmVhbSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      story: `Developed by a team of visionary engineers, the Electric Dream pushes the boundaries of what's possible in electric vehicle technology.`,
    },
    {
      id: 3,
      name: "Off-Road Warrior",
      year: 1985,
      description: `A rugged off-road vehicle that has conquered some of the world's toughest terrains.`,
      image:
        "https://images.unsplash.com/photo-1506469717960-433cebe3f181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE9mZiUyMFJvYWQlMjBXYXJyaW9yJTIwY2FyfGVufDB8fDB8fHww",
      story: `This Off-Road Warrior has a storied history, having participated in numerous international rallies and expeditions.`,
    },
  ];
  return (
    <div className="min-h-screen bg-[#f5f5f5] ">
      <main className="container mx-auto px-4 py-24">
        {/*   Car Sanctuary */}
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Car Sanctuary
        </motion.h1>

        <section className="mb-12">
          <motion.div
            className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="p-6">
              <motion.h2
                className="text-2xl font-bold mb-4 flex items-center text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <FaHeart className="mr-2 h-6 w-6 text-red-500" />
                Welcome to the Car Sanctuary
              </motion.h2>
              <motion.p
                className="text-lg mb-4 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                Discover the stories behind extraordinary vehicles, from classic
                beauties to futuristic marvels. Each car in our sanctuary has a
                unique tale to tell and a special place in automotive history.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <MdShield className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Preserving Automotive Heritage</span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  <FiZap className="mr-2 h-5 w-5 text-yellow-500" />
                  <span>Showcasing Innovation</span>
                </motion.div>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1 }}
                >
                  <FaLeaf className="mr-2 h-5 w-5 text-green-500" />
                  <span>Inspiring Sustainable Future</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Sanctuary Cars */}
        <section className="mb-12">
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Featured Sanctuary Cars
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {carSanctuaryData.map((car) => (
              <motion.div
                key={car.id}
                className="overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Ensure shadow-lg is consistently applied */}
                <div className="bg-white !shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src={
                      car.image ||
                      "https://images.unsplash.com/photo-1432462770865-65b70566d673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE9mZiUyMFJvYWQlMjBXYXJyaW9yJTIwY2FyfGVufDB8fDB8fHww"
                    }
                    alt={car.name || "Car Image"}
                    width={300}
                    height={200}
                    className="w-full object-cover h-48"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {car.name || "Unnamed Car"}
                    </h3>
                    <p className="text-gray-600">Year: {car.year || "N/A"}</p>
                    <p className="text-gray-800 mt-2">
                      {car.description || "No description available."}
                    </p>
                  </div>
                  <div className="p-6">
                    <Link
                      onClick={() => setSelectedCar(car)}
                      className="inline-flex items-center bg-emerald-500 text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-emerald-600 transition-colors"
                      href="/"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {selectedCar && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-xl font-bold mb-4">{selectedCar.name}</h2>
                <p className="text-lg mb-4">Year: {selectedCar.year}</p>
                <p>{selectedCar.story}</p>
                <button
                  onClick={() => setSelectedCar(null)}
                  className="mt-4 bg-gray-500 text-white rounded-lg px-4 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Sanctuary Experience */}
        <section className="mb-12" ref={ref2}>
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView2 ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Sanctuary Experience
          </motion.h2>

          <motion.div
            className="grid w-full grid-cols-3 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView2 ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          >
            <button
              onClick={() => {
                setactiveTab("visit");
              }}
              className={`${
                activeTab === "visit" ? "bg-emerald-500" : "bg-white"
              } py-2 px-4 text-lg font-semibold  rounded-sm hover:bg-emerald-300 transition-colors`}
            >
              Visit
            </button>
            <button
              onClick={() => {
                setactiveTab("events");
              }}
              className={`${
                activeTab === "events" ? "bg-emerald-500" : "bg-white"
              } py-2 px-4 text-lg font-semibold  rounded-sm hover:bg-emerald-300 transition-colors`}
            >
              Events
            </button>
            <button
              onClick={() => {
                setactiveTab("contribute");
              }}
              className={`${
                activeTab === "contribute" ? "bg-emerald-500" : "bg-white"
              } py-2 px-4 text-lg font-semibold  rounded-sm hover:bg-emerald-300 transition-colors`}
            >
              Contribute
            </button>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView2 ? 1 : 0 }}
            transition={{ duration: 1.8 }}
          >
            {/* Visit Tab Content */}
            {activeTab === "visit" && (
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 20 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Plan Your Visit</h3>
                <p className="text-lg mb-2">
                  Experience the Car Sanctuary in person
                </p>
                <p>Opening Hours: Tuesday - Sunday, 10:00 AM - 6:00 PM</p>
                <p>
                  Admission: $15 for adults, $10 for seniors and students, Free
                  for children under 12
                </p>
                <p>Guided tours available every hour on the hour</p>
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-emerald-600 transition-colors">
                  Book a Tour
                </button>
              </motion.div>
            )}

            {/* Events Tab Content */}
            {activeTab === "events" && (
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 20 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Upcoming Events</h3>
                <p className="text-lg mb-2">
                  Join us for special exhibitions and gatherings
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Classic Car Show - June 15-17</li>
                  <li>Electric Vehicle Symposium - July 8</li>
                  <li>Restoration Workshop - August 22-23</li>
                </ul>
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-emerald-600 transition-colors">
                  View All Events
                </button>
              </motion.div>
            )}

            {/* Contribute Tab Content */}
            {activeTab === "contribute" && (
              <motion.div
                className="bg-white shadow-lg rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 20 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Contribute to the Sanctuary
                </h3>
                <p className="text-lg mb-2">
                  Help us preserve automotive history
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Donate a vehicle to our collection</li>
                  <li>Volunteer for restoration projects</li>
                  <li>Sponsor an exhibit or event</li>
                </ul>
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-emerald-600 transition-colors">
                  Contact Us to Contribute
                </button>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Join Our Community Section */}
        <section className="mb-12" ref={ref}>
          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            Join Our Community
          </motion.h2>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
              <p className="text-lg mb-4">
                Subscribe to our newsletter for updates and exclusive content
              </p>
            </motion.div>

            <motion.form
              className="space-y-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-2 ">
                <label htmlFor="interests" className="font-medium">
                  Interests
                </label>
                <select
                  id="interests"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select your interests</option>
                  <option value="classic">Classic Cars</option>
                  <option value="electric">Electric Vehicles</option>
                  <option value="restoration">Car Restoration</option>
                  <option value="events">Sanctuary Events</option>
                </select>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <button className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 focus:outline-none transition-colors">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
