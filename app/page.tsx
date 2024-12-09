import { CarCard, CustomFilter, Heros, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const { cars: allCars, message } = await fetchCars("q3");

  // checking if data from endpoint is empty, using the variable in the ternary below to set incoming data.
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className='overflow-hidden'>

      <Heros />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>
            Explore premium cars, expert repairs, and top-notch maintenance
            solutions.
          </p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {/* Here I am conditionally displaying the cars */}
        {!isDataEmpty ? (
          <section >
            <div className="">
              {allCars?.map((car, index) => {
                return <CarCard key={index} car={car} />;
              })}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              !Oops, no result found
            </h2>
            <p>{message}</p> 
            
          </div>
        )}
      </div>
    </main>
  );
}
