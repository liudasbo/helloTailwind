import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white shadow-2xl flex border-t border-secondary text-gray-500 ">
      <div className="margin-rules w-full grid md:grid-cols-12 grid-cols-3 grid-rows-2 md:grid-rows-1 my-16 gap-5">
        <div className="flex flex-col gap-6 items-start md:col-span-4 col-span-3 mb-10 md:m-0">
          <img src="../../assets/logo.svg" alt="logo" className="h-10" />
          <p className="font-medium">
            <span className="text-primary font-bold">WestVPN</span> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/"
              className="bg-secondary rounded-full shadow-md text-primary hover:text-accent"
            >
              <FaFacebookF className="p-2 size-8" />
            </a>
            <a
              href="https://www.facebook.com/"
              className="bg-secondary rounded-full shadow-md text-primary hover:text-accent"
            >
              <FaInstagram className="p-2 size-8" />
            </a>
            <a
              href="https://www.facebook.com/"
              className="bg-secondary rounded-full shadow-md text-primary hover:text-accent"
            >
              <FaXTwitter className="p-2 size-8" />
            </a>
          </div>
          <a
            href="https://github.com/liudasbo/helloTailwind"
            className="text-gray-400 font-medium"
          >
            ©2024 - WestWPN
          </a>
        </div>

        <div className="md:col-start-7 md:col-span-2 row-start-2 col-start-1 md:row-start-1">
          <ul className="flex flex-col gap-2">
            <li className="text-text font-bold mb-3">Product</li>
            <li className="hover:text-primary cursor-pointer">Download</li>
            <li className="hover:text-primary cursor-pointer">Pricing</li>
            <li className="hover:text-primary cursor-pointer">Location</li>
            <li className="hover:text-primary cursor-pointer">Server</li>
            <li className="hover:text-primary cursor-pointer">Countries</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
          </ul>
        </div>

        <div className="md:col-start-9 md:col-span-2 row-start-2 col-start-2 md:row-start-1">
          <ul className="flex flex-col gap-2">
            <li className="text-text font-bold mb-3">Engage</li>
            <li className="hover:text-primary cursor-pointer">WestVPN</li>
            <li className="hover:text-primary cursor-pointer">FAQ</li>
            <li className="hover:text-primary cursor-pointer">Tutorials</li>
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-primary cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        <div className="md:col-start-11 md:col-span-2 row-start-2 col-start-3 md:row-start-1">
          <ul className="flex flex-col gap-2">
            <li className="text-text font-bold mb-3">Affiliate</li>
            <li className="hover:text-primary cursor-pointer">Contact Us</li>
            <li className="hover:text-primary cursor-pointer">
              Become Partner
            </li>
            <li className="hover:text-primary cursor-pointer">Read More</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
