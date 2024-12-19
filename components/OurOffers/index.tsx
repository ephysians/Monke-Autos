import { OurOfferValues } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Offers = () => {
  return (
    <div>
      <div className="flex overflow-x-auto gap-2 px-6 mx-20 items-center justify-center h-auto">
        {OurOfferValues.map((offer, index) => (
          <div
            key={index}
            className="flex-shrink-0 p-4 bg-white w-[286px] h-[387px]"
          >
            <div className="!border-b-[1px] border-black text-center mb-6">
              <h3 className="text-[22px] font-bold mb-2">{offer.title}</h3>
            </div>

            <div>
              <Link href={offer.readmoreUrl}>
                <Image
                  src={`/images/${offer.image.split("/").pop()}`}
                  alt={offer.title}
                  width={256}
                  height={160}
                  className="w-full h-[181px] cursor-pointer"
                />
              </Link>
              <p className="text-sm text-gray-600 mb-8">{offer.text}</p>
              {offer.readmoreUrl && (
                <div className="w-full bg-primary-blue p-5 h-[34px] text-white flex items-center justify-center rounded-md">
                  <Link href={offer.readmoreUrl} className="text-white">
                    Read more
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
