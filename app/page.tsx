import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard, ShowMore, Searchbar, CustomFilter, Hero, OurOffers,  } from "@/components";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 4,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  const isLoading = !allCars; 

  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className=" relative bottom-10 mt-10 padding-x padding-y w-full bg-gray-100"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>
            Explore premium cars, expert repairs, and top-notch maintenance
            solutions.
          </p>
        </div>

        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty && !isLoading ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
              <div className="mt-8 mb-8 w-full h-[0.125rem].125rem bg-gray-50" />
            </div>

            <ShowMore
              pageNumber={Math.ceil((searchParams.limit || 5) / 5)}
              isNext={allCars.length < (searchParams.limit || 5)}
            />
          </section>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message || "No details available"}</p>
          </div>
        )}
      </div>
      <OurOffers />
    </main>
  );
}
