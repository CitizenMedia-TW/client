import React from 'react'
import { FiFacebook, FiInstagram, FiHome } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-footer items-center bottom-0 py-12">
      <div
        role="grid"
        className="grid grid-cols-12 grid-rows-2 sm:grid-rows-1 px-2.5 gap-x-5 gap-y-7 xs:gap-y-2 sm:gap-y-4"
      >
        <section className="col-span-full flex justify-center items-center gap-x-5 xs:hidden text-white text-center font-bold uppercase">
          <h2 className="w-20">about</h2>
          <hr className="h-8 border-white border-2" />
          <h2 className="w-20">support</h2>
        </section>

        <section
          role="gridcell"
          className="col-span-full xs:col-span-6 sm:col-span-4 lg:col-span-3 row-span-1 w-full sm:w-9/12 min-h-16 xs:min-h-9 mx-auto"
        >
          <Link
            className="relative block w-full h-full hover:opacity-75 focus:opacity-75 transition-all"
            href={'/'}
          >
            <Image src={'/logoFoot.svg'} fill={true} alt="here was a logo:(" />
          </Link>
        </section>

        <section
          role="gridcell"
          className="hidden sm:block sm:col-span-4 lg:col-span-4 space-y-2 p-5 text-white border-l-4 border-l-white"
        >
          <h1 className="font-bold text-base md:text-2xl text-center sm:text-start uppercase">
            about us
          </h1>
          <p className="text-xs md:text-sm text-ellipsis line-clamp-5 lg:line-clamp-3">
            Lorem ipsum dolor sit amet consectetur. Morbi morbi at nisl sodales
            sit vitae orci felis. Commodo malesuada id est urna et.
          </p>
        </section>

        <section
          role="gridcell"
          className="hidden xs:grid col-span-5 sm:col-span-3 row-span-2 lg:px-5 grid-cols-2 gap-x-8 lg:gap-x-16 text-sm md:text-lg"
        >
          <article className="space-y-1.5 lg:max-w-24 text-white">
            <h2 className="font-bold uppercase">about</h2>
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
            <h2 className="font-bold uppercase">support</h2>
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
          className="sm:col-start-9 lg:col-start-11 col-span-full xs:col-span-6 sm:col-span-3 lg:col-span-2 row-span-1 flex justify-center sm:justify-end lg:justify-start items-center sm:items-end gap-x-4 text-white"
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
  )
}

export default Footer
