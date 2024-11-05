import { Banner, Connect, CustomerReviews, NavBar, OurServices } from "@/components/UI";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <div className="flex flex-col gap-20 p-10">
        <OurServices/>
        <CustomerReviews/>
        <Connect/>
      </div>
      <div className="bg-black text-white text-center p-4 ">
     <a href="https://syed-fahed.vercel.app/"> © 2024 Syed Fahed, all rights reserved. Made with ❤️ for a better web.</a>
      </div>
    </div>
  );
}
