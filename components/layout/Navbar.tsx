"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { data } = useSession();

  return (
    <nav className="w-full p-8 flex items-center justify-between ">
      <Link href={"/"} className="flex gap-2 items-center self-start">
        <img
          src="/photo/clubexcellogo.png"
          alt="logo"
          className="w-10 lg:w-14 h-auto"
        />
        <span className="uppercase text-2xl md:text-3xl font-semibold">
          club excel
        </span>
        <span className="text-sm text-red-100">
          debugging: {data ? data.user.email : "Not Logged In"}
        </span>
      </Link>

      <div className="w-fit justify-center items-center gap-8 hidden md:flex">
        <Link href={"/contact"} className="uppercase">
          contact us
        </Link>
        <Link href={"/contact"} className="uppercase">
          Quiz
        </Link>
        {
          !data ? (
            <Link href={"/signin"} className="uppercase p-2 bg-primary font-semibold rounded-lg px-4">
              Login
            </Link>
          ) : null
        }
      </div>

      <div
        className="md:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <button className="text-3xl">
          {isMenuOpen ? (
            <span
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              ✖
            </span>
          ) : (
            <span
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              ☰
            </span>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 w-full bg-[#020016] text-center py-4 z-10"
          onClick={() => setIsMenuOpen(false)}
        >
          <Link href={"/"} className="block text-white uppercase py-2 ">
            home
          </Link>
          <Link href={"/contact"} className="block text-white uppercase py-2">
            contact us
          </Link>
          <Link href={"/signin"} className="block text-white uppercase py-2">
            signin
          </Link>
          <Link href={"/signup"} className="block text-white uppercase py-2">
            signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
