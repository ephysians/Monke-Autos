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
import { CheckIcon } from '@heroicons/react/20/solid'
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import Image from "next/image";
import clsx from "clsx";
import { useState, Fragment } from "react";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  return (
    <div className="search-manufacturer mt-6">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full border top-4 ">
          <div className="absolute top-[25px]  w-full transform -translate-y-1/2">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </div>

          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Combobox.Options>
          {/* Add dropdown options dynamically */}
        </Combobox.Options>
      </Combobox>

      <ComboboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {filteredPeople.map((person) => (
          <ComboboxOption
            key={person.id}
            value={person}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
          >
            <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
            <div className="text-sm/6 text-white">{person.name}</div>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </div>
  );
};

export default SearchManufacturer;
