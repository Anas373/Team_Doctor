import React, { useState } from "react";

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <h1 className="text-center text-4xl font-semibold my-8">
    About <span className="text-blue-500">Us</span>
  </h1>
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Section image */}
      <div className="w-full md:w-1/2">
        <div className="relative w-full h-full">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Modern house"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Section texte */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12">
        <h3 className="text-lg text-blue-500 font-semibold">Our Value</h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Value We Give to You
        </h2>
        <p className="text-gray-600 mt-4">
          We are always ready to help by providing the best services for you. We
          believe a good place to live can make your life better.
        </p>

        {/* Accordéon */}
        <div className="mt-6">
          {[
            {
              title: "Best interest rates on the market",
              content:
                "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
            },
            {
              title: "Prevent unstable prices",
              content:
                "Consectetur amet mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
            },
            {
              title: "Best price on the market",
              content:
                "Anim aute id magna aliqua mollit voluptate laborum consequat minim exercitation veniam.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-gray-800 font-medium">
                  {item.title}
                </h4>
                <span className="text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
    </>
  );
};

export default AboutUs;
