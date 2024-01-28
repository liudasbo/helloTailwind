import { FaUsers } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiServerStack } from "react-icons/hi2";
import securityIllustrationSvg from "../../assets/security-illustration.svg";

export default function About() {
  return (
    <main name="About" className="bg-background flex">
      <div className="margin-rules flex flex-col">
        <div className="flex flex-col-reverse sm:flex-row">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl md:text-5xl font-medium mt-8 sm:mt-0">
              Browse Safely and Anonymously with{" "}
              <strong className="text-primary">WestVPN</strong>
            </h1>
            <p className="text-gray-700">
              Unlock Effortless Connectivity and Fun Exploration with{" "}
              <strong className="text-primary">WestVPN </strong>
              Experience a Network Designed to Meet All Your Needs, Packed with
              Exciting Features.
            </p>
            <button className="primary-button mr-auto">Get Started</button>
          </div>

          <img
            src={securityIllustrationSvg}
            alt="illustration"
            className="object-fit lg:w-1/2 md:w-2/5 h-auto sm:w-1/2"
          />
        </div>

        <div className="bg-white rounded mt-16 flex-row sm:flex p-10 sm:p-10 shadow-md">
          <div className="flex border-b-2 border-gray-300 sm:border-b-0 sm:border-r-2 p-4 py-8 sm:p-4 sm:w-full">
            <div className="flex items-center w-40 m-auto sm:w-auto">
              <FaUsers className="size-10 bg-secondary text-primary rounded-full p-2 mr-5" />
              <div>
                <p className="font-bold text-lg">420+</p>
                <p className="text-gray-700 text-lg">Users</p>
              </div>
            </div>
          </div>

          <div className="flex border-b-2 border-gray-300 sm:border-b-0 sm:border-r-2 p-4 py-8 sm:p-4 sm:w-full">
            <div className="flex items-center w-40 m-auto sm:w-auto">
              <IoLocationSharp className="size-10 bg-secondary text-primary rounded-full p-2 mr-5" />
              <div>
                <p className="font-bold text-lg">21+</p>
                <p className="text-gray-700 text-lg">Locations</p>
              </div>
            </div>
          </div>

          <div className="flex p-4 py-8 sm:p-4 sm:w-full">
            <div className="flex items-center w-40 m-auto sm:w-auto">
              <HiServerStack className="size-10 bg-secondary text-primary rounded-full p-2 mr-5" />
              <div>
                <p className="font-bold text-lg">30+</p>
                <p className="text-gray-700 text-lg">Server</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
