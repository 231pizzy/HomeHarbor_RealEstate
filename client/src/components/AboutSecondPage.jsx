export default function AboutSecondPage() {
  return (
    <div className="flex flex-col gap-6 p-16 px-3 w-full  bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-700">
            Trusted by investors across the world
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl hover:bg-green-700  hover:text-white">
            <p className="text-4xl font-bold">Our Vision</p>
            <p className="mt-2">
              {" "}
              To make home ownership dream a reality to as many people as
              possible
            </p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl hover:bg-green-700  hover:text-white">
            <p className="text-4xl font-bold">Our Mission</p>
            <p className="mt-2">
              To discover lands everywhere and make these known to you and also
              show how you can make money to buy land and build your own home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
