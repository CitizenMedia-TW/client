import React from "react";
import { FiFacebook, FiInstagram, FiHome } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-footer items-center bottom-0 py-12">
      <div role="grid" className="grid grid-cols-12 gap-5">
        <section
          role="gridcell"
          className="relative col-span-3 w-9/12 mx-auto object-contain"
        >
          <Image src={"/logoFoot.svg"} fill={true} alt="here was a logo:(" />
        </section>

        <section
          role="gridcell"
          className="col-span-4 gap-y-2 p-5 text-white border-l-4 border-l-white"
        >
          <h1 className="font-bold text-2xl uppercase">about us</h1>
          <p className="text-sm text-ellipsis line-clamp-3">
            Lorem ipsum dolor sit amet consectetur. Morbi morbi at nisl sodales
            sit vitae orci felis. Commodo malesuada id est urna et.
          </p>
        </section>

        <section role="gridcell" className="col-span-3 flex justify-around">
          <section className="space-y-1.5 text-white">
            <div className="font-bold uppercase pb-1">about</div>
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
          </section>

          <section className="space-y-1.5 text-white">
            <div className="font-bold uppercase pb-1">support</div>
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
          </section>
        </section>

        <section
          role="gridcell"
          className="col-span-2 flex items-end gap-x-4 text-white"
        >
          <Link title="Facebook" href="https://facebook.com">
            <FiFacebook className="size-8 hover:scale-90 hover:opacity-75 transition-all" />
          </Link>
          <Link title="Instagram" href="https://instagram.com">
            <FiInstagram className="size-8 hover:scale-90 hover:opacity-75 transition-all" />
          </Link>
          <Link title="Home" className="overflow-hidden" href="/">
            <FiHome className="size-8 hover:scale-90 hover:opacity-75 transition-all" />
          </Link>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
