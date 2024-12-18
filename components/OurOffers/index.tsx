import { OurOfferValues } from "@/constants";



const Offers = () => {
  return (
    <div className="flex overflow-x-auto gap-4 py-7 px-10 mx-20">
      {OurOfferValues.map((offer, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 p-4 bg-white border rounded-lg shadow-md "
        >
          <img
            src={offer.image}
            alt={offer.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
          <p className="text-sm text-gray-600">{offer.text}</p>
          {offer.readmoreUrl && (
            <a
              href={offer.readmoreUrl}
              className="mt-2 inline-block text-primary-blue underline"
            >
              Read more
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Offers;
