import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className=" bg-black/20 h-full w-full">
      <div className="h-full flex justify-center items-center p-2 bg-primary/10">
        <div className="container grid grid-cols-1 gap-10">
          <div className="text-white text-center">
            <p data-aos="fade-up" className="text-5xl font-bold">
              Explore The World Around You
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-1xl mt-50px"
            >
            Take a break from the stress of everyday life,plan trips and explore your favourite destinations
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white text-center rounded-md p-10 relative mt-40"
          >
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 ">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Check In
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Check Out
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full !placeholder-slate-400 bg-gray-100 my-2 rounded-full focus:outline-primary focus:outline outline-1 p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-pink-400 to-pink-800 h-2 rounded-full my-2"
                    min="1500"
                    max="8000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
               
                
                </div>
           
              </div>
              <div >
                  <button className="bg-pink-700 hover:bg-bg-gradient-to-r hover:bg-pink-600 transition-all duration-600 text-white mt-6 ml-4 px-5 py-2 rounded-full">
                    Search
                  </button>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
