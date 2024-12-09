"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { CustomButton } from "@/components";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleShowMore = () => {
    // Calculate the new limit based on the page number
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  const handleShowLess = () => {
    // Reset to the first page by setting the limit to 10
    const newPathname = updateSearchParams("limit", "10");
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <>
          <CustomButton
            btnType="button"
            title="View More"
            containerStyles="bg-primary-blue rounded-md text-white"
            handleClick={handleShowMore}
          />
          <CustomButton
            btnType="button"
            title="View Less"
            containerStyles="bg-[#c6ac8f] rounded-md text-white"
            handleClick={handleShowLess}
          />
        </>
      )}
    </div>
  );
};

export default ShowMore;
