import { OurOfferValues } from "@/constants";
import Image from "next/image";

const Offers = () => {
  return (
    <div className="flex overflow-x-auto gap-4 py-7 px-8 mx-20 items-center justify-center h-auto">
      {OurOfferValues.map((offer, index) => (
        <div
          key={index}
          className="flex-shrink-0 p-4 bg-white w-[286px] h-[387px] "
        >
          <div className="border-b-2 border-black text-center mb-6">
            <h3 className="text-lg font-bold mb-2 ">{offer.title}</h3>
          </div>

          <div>
            <Image
              src={`/images/${offer.image.split("/").pop()}`} // Assuming images are in the public/images folder
              alt={offer.alt1}
              width={256}
              height={160}
              className=" w-full h-[181px]"
            />
            <p className="text-sm text-gray-600 mb-8">{offer.text}</p>
            {offer.readmoreUrl && (
              <div className="w-full bg-primary-blue h-[34px] border-1.5 border-yellow-400 text-white flex items-center justify-center">
                <a href={offer.readmoreUrl} className="text-white">
                  Read more
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;

