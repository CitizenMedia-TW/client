import React from "react";
import { FiFacebook, FiInstagram, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-footer items-center bottom-0 py-12">
      <div role="grid" className="grid grid-cols-12 gap-x-5 gap-y-12">
        <section
          role="gridcell"
          className="relative col-span-full sm:col-span-6 lg:col-span-3 w-9/12 h-24 mx-auto object-contain"
        >
          <Image src={"/logoFoot.svg"} fill={true} alt="here was a logo:(" />
        </section>

        <section
          role="gridcell"
          className="col-span-full sm:col-span-6 lg:col-span-4 space-y-2 p-5 text-white border-l-4 border-l-white"
        >
          <h1 className="font-bold text-2xl text-center sm:text-start uppercase">
            about us
          </h1>
          <p className="text-sm text-ellipsis line-clamp-3">
            Lorem ipsum dolor sit amet consectetur. Morbi morbi at nisl sodales
            sit vitae orci felis. Commodo malesuada id est urna et.
          </p>
        </section>

        <section
          role="gridcell"
          className="sm:col-start-3 lg:col-start-8 col-span-full sm:col-span-8 lg:col-span-3 px-5 grid grid-cols-2 gap-x-16 text-center lg:text-start"
        >
          <article className="space-y-1.5 lg:max-w-24 text-white">
            <h2 className="font-bold uppercase pb-1">about</h2>
            <hr className="border border-white" />
            <ul className="space-y-2 uppercase">
              <li title="Blog" className="hover-show-underline">
                <Link className="block" href="https://google.com">
                  blog
                </Link>
              </li>
              <li title="Status" className="hover-show-underline">
                <Link className="block" href="https://google.com">
                  status
                </Link>
              </li>
              <li title="Career" className="hover-show-underline">
                <Link className="block" href="https://google.com">
                  career
                </Link>
              </li>
            </ul>
          </article>

          <article className="space-y-1.5 lg:max-w-24 text-white">
            <h2 className="font-bold uppercase pb-1">support</h2>
            <hr className="border border-white" />
            <ul className="space-y-2 uppercase">
              <li title="Help" className="hover-show-underline">
                <Link className="block" href="https://google.com">
                  help
                </Link>
              </li>
              <li title="Privacy" className="hover-show-underline">
                <Link className="block" href="https://google.com">
                  privacy
                </Link>
              </li>
            </ul>
          </article>
        </section>

        <section
          role="gridcell"
          className="col-span-full lg:col-span-2 flex justify-center lg:justify-start items-end gap-x-4 text-white"
        >
          <Link
            title="Facebook"
            href="https://facebook.com"
            className="hover:scale-90 hover:opacity-75 focus:scale-90 focus:opacity-75 transition-all"
          >
            <FiFacebook className="size-8" />
          </Link>
          <Link
            title="Instagram"
            href="https://instagram.com"
            className="hover:scale-90 hover:opacity-75 focus:scale-90 focus:opacity-75 transition-all"
          >
            <FiInstagram className="size-8" />
          </Link>
          <Link
            title="Home"
            href="/"
            className="hover:scale-90 hover:opacity-75 focus:scale-90 focus:opacity-75 transition-all"
          >
            <FiHome className="size-8" />
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
