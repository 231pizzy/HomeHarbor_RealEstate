import { GiPodiumWinner } from "react-icons/gi";
import { GiChampions } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

export default function AboutValues() {
  return (
    <div>
      <div className="flex flex-col px-3 max-w-7xl mx-auto  border-slate-300 rounded-xl shadow-xl bg-white">
        <h1 className="text-5xl font-bold text-center mx-auto mb-5 mt-4 ">
          About <span className="text-green-700">us</span>
        </h1>
        <p>
          At HomeHarbor, we are dedicated to providing an unparalleled real
          estate experience. Our mission is to connect you with your dream
          property effortlessly. With a commitment to excellence and a
          customer-centric approach, we redefine the way you discover and secure
          your ideal space.
        </p>
        <br />
        <p>
          HomeHarbor stands as a beacon of trust and integrity in the realm of
          real estate. Our team of seasoned professionals leverages industry
          expertise to curate a portfolio of prime properties. We prioritize
          your aspirations, offering personalized assistance and guidance
          throughout your property journey.
        </p>
        <br />
        <p className="mb-5">
          Partner with HomeHarbor and embark on a seamless path to finding your
          perfect property. Discover, explore, and secure your dream space with
          absolute ease. Join us and let HomeHarbor be your trusted partner in
          shaping your real estate aspirations.
        </p>
      </div>
      <div className="flex flex-col px-3 max-w-6xl mx-auto py-6 md:left-1/2 transform bg-white border border-slate-300 rounded-xl text-center text-green-700 font-bold">
        Our Core Values
        <div className="flex justify-between flex-wrap px-4">
          <p className="flex px-4 py-2 text-slate-500 hover:text-green-700">
            <GiPodiumWinner className="h-6 text-green-700 mr-2" /> Integrity
          </p>
          <p className="flex px-4 py-2 text-slate-500 hover:text-green-700">
            <GiChampions className="h-6 text-green-700 mr-2" /> Excellence
          </p>
          <p className="flex px-4 py-2 text-slate-500 hover:text-green-700">
            <FaHandshake className="h-6 text-green-700 mr-2" /> Customer-centric
          </p>
          <p className="flex px-4 py-2 text-slate-500 hover:text-green-700">
            <FaSuitcase className="h-6 text-green-700 mr-2" /> Professionalism
          </p>
        </div>
      </div>
    </div>
  );
}
