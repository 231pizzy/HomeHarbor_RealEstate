import homeharbor from "../assets/Harbor.jpeg";
import { Link } from "react-router-dom";

export default function AboutHomePage() {
  return (
    <div className="flex  flex-col gap-6 p-16 px-3 max-w-10xl mx-auto justify-between bg-white border border-zinc-300 rounded-xl shadow-xl">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">
            Experience the essence of HomeHarbor—a gateway to your ideal
            property journey.
          </p>
          <h1 className="py-3 text-3xl md:text-4xl font-bold text-green-700">
            Explore, discover, and secure your dream space effortlessly with us.
          </h1>
          <h2 className="text-2xl">
            Welcome to a seamless real estate venture at HomeHarbor.
          </h2>
          <Link
            to="/search"
            className="text-md sm:text-md text-green-700 font-bold hover:underline inline-block bg-transparent border border-green-700 py-3 px-6 rounded-md transition duration-300 ease-in-out hover:bg-green-700 hover:text-white my-1 mt-3"
          >
            {`Let's get started...`}
          </Link>
        </div>
        <div className="sm:mt-14">
          <img className="w-full" src={homeharbor} alt="homeharbor" />
        </div>
      </div>
    </div>
  );
}
