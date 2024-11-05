import Image from "next/image";

const Connect = () => {
  return (
    <div id="connect" className="">
      <h2 className="text-2xl font-bold text-center">Connect with Us</h2>
      <div className="flex justify-center gap-4 items-center flex-wrap py-3">
        <div>
          <Image
            src="/images/connect.jfif"
            width={200}
            height={100}
            alt="connect"
          />
        </div>
        <div>
          <p>
            Phone: <a href="tel:+917097284913" className="text-blue-600">+91 7097 28 4913</a>
          </p>
          <p  >Email: <a className="text-blue-600" href="mailto:Mdshayeebpasha@gmail.com">Mdshayeebpasha@gmail.com</a></p>
          <p>
            Location: Fort View Colony, Pillar No. 191, Upparpalli,
            Rajendernagar Road, Hyderabad
          </p>
        </div>
      </div>
    </div>
  );
};
export { Connect };
