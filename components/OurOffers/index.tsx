import { OurOfferValues } from "@/constants";
import Image from "next/image";

const Offers = () => {
  return (
    <div className="flex overflow-x-auto gap-4 py-7 px-10 mx-20 items-center justify-center h-auto">
      {OurOfferValues.map((offer, index) => (
        <div
          key={index}
          className="flex-shrink-0 p-4 bg-white border w-[286px] h-[387px] "
        >
          <div className="border-b-2 text-center">
            <h3 className="text-lg font-bold mb-2 ">{offer.title}</h3>
          </div>

          <div>
            <Image
              src={offer.image}
              alt={offer.title}
              width={256}
              height={160}
              className=" w-full h-[181px]"
            />
            <p className="text-sm text-gray-600">{offer.text}</p>
            {offer.readmoreUrl && (
              <div className=" w-full bg-primary-blue p-5 h-[34px] text-center">
                <a href={offer.readmoreUrl} className="text-center text-white">Read more</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;

