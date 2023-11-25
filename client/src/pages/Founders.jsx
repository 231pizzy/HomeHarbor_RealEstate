import { useState } from "react";
import founder from "../assets/founder.jpg";
import owner from "../assets/owner.jpg";

export default function Founders() {
  const [more, setMore] = useState(false);
  const [second, setSecond] = useState(false);

  const handleToggle = () => {
    setMore(!more);
  };

  const handleClick = () => {
    setSecond(!second);
  };

  return (
    <div className=" mx-auto max-w-10xl md:p-10 p-4 lg:p-20  border border-zinc-300 rounded-xl shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        <div className="flex items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <img
              className="w-96 h-96 mb-4 rounded-xl sm:mr-8"
              src={founder}
              alt="Founder"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-bold">Ejiofor Obiora</h3>
              <h4 className="font-semibold">
                Chairman, <span className="text-green-700">HomeHarbor</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p>
            Software Engineer with expertise in HTML, CSS, React, Tailwind,
            Javascript, and Typescript. I excel in crafting visually appealing
            front-end designs while leveraging my proficiency in Node.js,
            Express.js, PostgreSQL, MongoDB, MySQL to extend my capabilities to
            the back-end.
            {more && (
              <span>
                Software Engineer with expertise in HTML, CSS, React, Tailwind,
                Javascript, and Typescript. I excel in crafting visually
                appealing front-end designs while leveraging my proficiency in
                Node.js, Express.js, PostgreSQL, MongoDB, MySQL to extend my
                capabilities to the back-end.
              </span>
            )}
          </p>
          <div className="justify-start mt-7">
            <button
              onClick={handleToggle}
              className="border bg-green-700 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 text-sm"
            >
              {more ? "Show less" : "Show more"}
            </button>
          </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <img
              className="w-96 h-96 rounded-xl mb-4 sm:mr-8"
              src={owner}
              alt="Owner"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-bold">Kingsley Obiora</h3>
              <h4 className="font-semibold">
                Chairman, <span className="text-green-700">HomeHarbor</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p>
            Software Engineer with expertise in HTML, CSS, React, Tailwind,
            Javascript, and Typescript. I excel in crafting visually appealing
            front-end designs while leveraging my proficiency in Node.js,
            Express.js, PostgreSQL, MongoDB, MySQL to extend my capabilities to
            the back-end.
            {second && (
              <span>
                Software Engineer with expertise in HTML, CSS, React, Tailwind,
                Javascript, and Typescript. I excel in crafting visually
                appealing front-end designs while leveraging my proficiency in
                Node.js, Express.js, PostgreSQL, MongoDB, MySQL to extend my
                capabilities to the back-end.
              </span>
            )}
          </p>
          <div className="justify-start mt-7">
            <button
              onClick={handleClick}
              className="border bg-green-700 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 text-sm"
            >
              {second ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
