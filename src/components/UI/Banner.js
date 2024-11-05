import Image from "next/image";
import { Button } from "./button";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter()
  return (
    <div id="home" className="flex sm:flex-col-reverse flex-col-reverse xl:flex-row md:flex-row lg:flex-row justify-center items-center gap-20 py-20 bg-gradient-to-r from-stone-500 to-stone-700">
      <div className="text-white flex-1 pl-10">
        <h1 className=" text-4xl font-bold">
        We Solve All Your House Problems!
        </h1>
        <p className="text-[12px] my-3">
        Trusted Electrical Services for Commercial & Residential Properties 
        </p>
        <div className="my-4">
          <Button variant="outline" onClick={()=>{
            router.push('#connect')
          }}>Get a Connect</Button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/banner.jpg"
          alt="banner"
          width={700}
          height={1000}
          className=" bg-cover w-full h-auto"
        />
      </div>
    </div>
  );
};
export { Banner };
