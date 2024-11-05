import Image from "next/image";

const OurServices = () => {
  return (
    <div id='services' className="py-5 shadow-sm rounded-md bg-white xl:bg-[url('/images/bg-blots.jpg')] lg:bg-[url('/images/bg-blots.jpg')] bg-cover p-10">
      <div className=" grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 items-center gap-6">
        <h2 className="text-2xl font-bold">OUR SERVICES</h2>
        <p className="text-sm">
          Emerald Electricals is a top-rated provider of residential and
          commercial electrical services in Hyderabad. Our team specializes in
          reliable and safe electrical solutions for homes, businesses, and
          large facilities.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 py-4 justify-center items-center text-[16px]">
        <Image
          src="/images/services.png"
          alt="services"
          width={400}
          height={200}
          className=" w-auto h-auto bg-contain rounded-md"
        />
        <div className="flex flex-col gap-4">
          <p>
            <span className=" font-bold">1. Electrical Safety Inspection:</span>{" "}
            Ensure your home or business meets the highest safety standards with
            our comprehensive inspections.
          </p>
          <p>
            <span className=" font-bold">2. Electrical Installation:</span>{" "}
            Expert installations for lighting, wiring, and electrical panels.
          </p>
          <p>
            <span className=" font-bold">
              3. Commercial & Residential Wiring:
            </span>{" "}
            Wiring solutions for apartments, homes, hotels, offices, and
            showrooms.
          </p>
          <p>
            <span className=" font-bold">
              4. Hotel, Resort, & Showroom Wiring Repair:
            </span>{" "}
            Specialized repairs to maintain safety and functionality in
            high-traffic areas.
          </p>
          <p>
            <span className=" font-bold">
              5. New Construction Electrical Works:
            </span>{" "}
            Professional electrical work for new constructions, including slab
            and chipping projects.
          </p>
          <p>
            <span className=" font-bold">6. Maintenance Services:</span>{" "}
            Full-service maintenance for residential and commercial electrical
            systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export { OurServices };
