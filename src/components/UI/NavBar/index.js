import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navList = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "Services",
      url: "#services",
    },
    {
      name: "Review",
      url: "#review",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <div className="text-white sticky top-0 z-10 py-2 px-10 bg-gradient-to-r from-stone-500 to-stone-700 ">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-2 items-center">
        <div className="flex gap-2 items-end">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            className=" rounded-md"
          />
          <p className=" text-[12px] font-semibold ">Repair You&apos;r House</p>
        </div>
        <div className="xl:flex lg:flex xl:gap-12 lg:gap-6 col-span-2 justify-end md:hidden hidden pr-5">
          {navList.map((list, index) => {
            return (
              <a
                key={index}
                href={list.url}
                className="text-[14px] font-medium hover:text-blue-500"
              >
                {list.name}
              </a>
            );
          })}
        </div>
        <div className=" block xl:hidden lg:hidden text-right">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <Image
              width={20}
              height={20}
              alt="menu"
              className="text-white fill-white"
              src={isOpen ? '/images/xmark-solid.svg' : '/images/bars-solid.svg'}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="h-[100vh] mt-10  block xl:hidden lg:hidden">
          <div className="flex flex-col gap-4">
            {navList.map((list, index) => {
              return (
                <a
                  key={index}
                  href={list.url}
                  className="text-[16px] font-normal hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {list.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export { NavBar };
