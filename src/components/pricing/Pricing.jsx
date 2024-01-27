import { FaCheck } from "react-icons/fa6";

export default function Pricing() {
  return (
    <section name="Pricing" className="bg-background">
      <div className="margin-rules flex">
        <div className="w-full mt-16">
          <div className="text-center flex flex-col gap-5">
            <h3 className="font-bold text-4xl text-text">Plans & Pricing</h3>
            <p className="text-gray-700">
              Select the package that suits you best and delve into it with
              happiness and cheerfulness.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:grid md:grid-cols-3 md:grid-rows-1 sm:grid-cols-4 sm:grid-rows-2 gap-4">
            <div className="bg-white rounded-md shadow sm:col-span-2 md:col-span-1 hover:outline hover:outline-secondary">
              <div className="p-6 text-center text-text flex flex-col h-full">
                <p className="font-bold text-2xl mb-8">Free Plan</p>
                <img
                  src="/src/assets/data-illustration.svg"
                  alt="data illustration"
                  className="w-[60%] mx-auto sm:w-[80%] mb-4"
                />
                <ul className="flex flex-col gap-4 mt-4 text-gray-700 text-start mb-5">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700 text" />
                    <p>Robust online security</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Unrestricted internet access</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Turbocharged VPN experience</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>No fixed time constraints</p>
                  </li>
                </ul>
                <div className="flex flex-col gap-4 mt-auto">
                  <p className="font-bold text-xl">Free</p>
                  <button className="secondary-button m-auto">Select</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md shadow sm:col-span-2 md:col-span-1 hover:outline hover:outline-secondary">
              <div className="p-6 text-center text-text flex flex-col h-full">
                <p className="font-bold text-2xl mb-8">Standart Plan</p>
                <img
                  src="/src/assets/data-illustration.svg"
                  alt="data illustration"
                  className="w-[60%] mx-auto sm:w-[80%] mb-4"
                />
                <ul className="flex flex-col gap-4 mt-4 text-gray-700 text-start mb-5">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700 text" />
                    <p>Robust online security</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Unrestricted internet access</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Turbocharged VPN experience</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>No fixed time constraints</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Connect Anywhere</p>
                  </li>
                </ul>
                <div className="flex flex-col gap-4 mt-auto">
                  <p className="font-bold text-xl">$8 / month</p>
                  <button className="secondary-button m-auto">Select</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md shadow sm:row-start-2 sm:col-start-2 sm:col-span-2 md:row-start-1 md:col-span-1 md:col-start-3 hover:outline hover:outline-secondary">
              <div className="p-6 text-center text-text flex flex-col h-full">
                <p className="font-bold text-2xl mb-8">Ultra Plan</p>
                <img
                  src="/src/assets/data-illustration.svg"
                  alt="data illustration"
                  className="w-[60%] mx-auto sm:w-[80%] mb-4"
                />
                <ul className="flex flex-col gap-4 mt-4 text-gray-700 text-start mb-5">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700 text" />
                    <p>Robust online security</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Unrestricted internet access</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Turbocharged VPN experience</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>No fixed time constraints</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Connect Anywhere</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-700" />
                    <p>Get Newest Features</p>
                  </li>
                </ul>
                <div className="flex flex-col gap-4 mt-auto">
                  <p className="font-bold text-xl">$22 / month</p>
                  <button className="secondary-button m-auto">Select</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
