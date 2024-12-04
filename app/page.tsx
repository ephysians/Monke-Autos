import { Heros, SearchBar, CustomeFilter } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const { cars: allCars, message } = await fetchCars("camry");

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
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

          <div className="home__filter-container">
            <CustomeFilter title="fuel" />
            <CustomeFilter title="year" />
          </div>
        </div>

        {/* Here I am conditionally displaying the cars */}
        {!isDataEmpty ? (
          <section>WE HAVE CARS</section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              !Oops, no result found
            </h2>
            <p>{message}</p> {/* Display the message */}
          </div>
        )}
      </div>
    </main>
  );
}
