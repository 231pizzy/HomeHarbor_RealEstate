import support from "../assets/support.jpg";

export default function AboutServices() {
  return (
    <div className="w-full mt-16">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={support}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Our Services
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            HomeHarbor: Your dedicated team of real estate professionals. Our
            seasoned experts offer unmatched expertise and client-centric
            service. From buying to selling, trust us to guide you to success in
            the real estate world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8 hover:text-green-700">
              {/* <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" /> */}
              <h3 className="font-bold text-2xl my-6">
                Real Estate Investment
              </h3>
              <p className="text-xl text-black">
                {`At HomeHarbor, we're more than just real estate professionals
                we're your dedicated partners in navigating the real estate
                market. Our array of services includes Land and Property
                Acquisition, Sales, Real Estate Trading, Leasing, Investment
                Consultation, and Property Management. With our ongoing ventures
                in buying, selling, and leasing lands and buildings, we are your
                reliable choice for all your real estate needs.`}
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                {/* Contact Us <ArrowSmRightIcon className="w-5 ml-2" /> */}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8 hover:text-green-700">
              {/* <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" /> */}
              <h3 className="font-bold text-2xl my-6 ">
                Land Surveying And Property Development
              </h3>
              <p className="text-black text-xl">
                HomeHarbor offers prime, rapidly developing lands at affordable
                rates. We specialize in property development services
                encompassing land acquisition, legal documentation, estate
                planning, and renovation. Our expertise includes topographical
                surveys, building plans, and boundary surveys, ensuring the
                authenticity and security of your land properties.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                {/* Contact Us <ArrowSmRightIcon className="w-5 ml-2" /> */}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8 hover:text-green-700">
              {/* <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" /> */}
              <h3 className="font-bold text-2xl my-6">
                Real Estate Consultancy and Mangement
              </h3>
              <p className="text-black text-xl">
                At HomeHarbor, we prioritize property management, ensuring
                meticulous care and oversight. Our team comprises seasoned real
                estate professionals, estate surveyors, and valuers, supported
                by adept administrative and technical staff. Renowned as leading
                Real Estate Consultants, we specialize in both residential and
                commercial projects, making us a highly sought-after consultancy
                in the industry.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                {/* Contact Us <ArrowSmRightIcon className="w-5 ml-2" /> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
