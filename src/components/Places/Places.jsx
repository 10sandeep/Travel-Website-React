import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/Neatherland.jpg";
import Img2 from "../../assets/places/Taj Mahal.jpg";
import Img3 from "../../assets/places/London.jpg";
import Img4 from "../../assets/places/dubai.jpg";
import Img5 from "../../assets/places/paris.jpg";
import Img6 from "../../assets/places/Switzerland.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Aurora",
    location: "Iceland",
    description: "The aurora in Iceland paints the night sky with vibrant, dancing colors, creating a breathtaking natural spectacle.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal, an iconic symbol of love, is a breathtaking white marble mausoleum in Agra, India.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "London Eye",
    location: "London",
    description:
      "The London Ferris Wheel, known as the London Eye, offers stunning panoramic views of the city's iconic landmarks.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Dubai",
    location: "Abu Dhabi",
    description: "Dubai is a vibrant city known for its modern architecture, luxury shopping, diverse culture, and innovative developments.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Eiffel Tower",
    location: "France",
    description:
      "The Eiffel Tower, an iconic Parisian landmark, symbolizes French engineering excellence and offers stunning city views.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Landscapes",
    location: "Switzerland",
    description:
      "Switzerland is known for its picturesque landscapes, precision engineering, rich cultural heritage, and being a global financial hub.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className=" bg-black py-20">
        <section data-aos="fade-up" className="container">
        <div data-aos="fade-up" data-aos-duration="300" className="text-center mb-20 max-w-[400px] mx-auto">
            {/* <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p> */}
            <h1 className="text-4xl text-white font-bold">Popular Package</h1>
            <p className="text-xl mt-10 text-gray-400">
              {" "}
             The Most Popular tour Packages presented to you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-20">
          <button
                className="bg-pink-700 hover:bg-bg-gradient-to-r hover:bg-pink-600 transition-all duration-600 text-white px-5 py-2 rounded-full"
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Explore More
              </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
