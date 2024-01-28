import { FaCheckCircle } from "react-icons/fa";

export default function Feature() {
  return (
    <section name="Feature" className="bg-background flex">
      <div className="margin-rules flex w-full my-16">
        <div className="flex sm:flex-row flex-col m-auto">
          <img
            src="/src/assets/features-illustration.svg"
            alt="features illustration"
            className="object-fit flex w-[50%] sm:w-[40%] m-auto mb-8 sm:mb-auto"
          />

          <div className="flex flex-col gap-5 sm:w-[50%] justify-center">
            <h3 className="text-4xl text-text font-medium ">
              Explore Our Abundance of Features
            </h3>
            <p className="text-gray-700">
              Discover the pleasure of unique features, each with its own
              functionalities. Dive into a variety of capabilities, crafted for
              your enjoyment and convenience.
            </p>
            <ul className="text-gray-700 flex flex-col gap-1">
              <li className="flex gap-2 items-center font-medium">
                <FaCheckCircle className="text-green-700" />
                Robust online security
              </li>
              <li className="flex gap-2 items-center font-medium">
                <FaCheckCircle className="text-green-700" />
                Unrestricted internet access
              </li>
              <li className="flex gap-2 items-center font-medium">
                <FaCheckCircle className="text-green-700" />
                Turbocharged VPN experience
              </li>
              <li className="flex gap-2 items-center font-medium">
                <FaCheckCircle className="text-green-700" />
                No fixed time constraints
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
