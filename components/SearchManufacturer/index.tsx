// "use client";
// import { SearchManufacturerProps } from "@/types";
// import { Combobox, Transition } from "@headlessui/react";
// import Image from "next/image";

// const SearchManufacturer = ({
//   manufacturer,
//   setManufacturer,
// }: SearchManufacturerProps) => {
//   return (
//     <div className="search-manufacturer">
//       <Combobox>
//         <div className="relative w-full">
//             <Combobox.Button className="absolute top-[140px]">
//                 <Image
//                  src='/car-logo.svg'
//                  width={20}
//                  height={20}
//                  className="ml-4"
//                  alt="car-logo" 
//                 />
//             </Combobox.Button>
//         </div>
//       </Combobox>
//     </div>
//   );
// };

// export default SearchManufacturer;

"use client";
import { SearchManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({manufacturer,
  setManufacturer }: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox
        value={manufacturer}
        onChange={setManufacturer}
      >
        <div className="relative w-full">
          {/* Image positioned absolutely */}
          <div className="absolute top-[50%] left-4 transform -translate-y-1/2">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="car-logo"
            />
          </div>

          {/* Input field with padding to avoid overlap */}
          <Combobox.Input
            className="search-input pl-12" // Add padding to make space for the image
            placeholder="Search manufacturer"
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>
        <Combobox.Options>
          {/* Add dropdown options dynamically */}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;


