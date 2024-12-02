import { Heros } from "@/components";
import SearchBar from '../components/SearchBar';
import CustomeFilter from '../components/CustomeFilter';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Luxury SUV Sales, Repairs & Maintenance | Premium Service",
  description: "Discover top-notch luxury SUVs, expert repairs, and reliable maintenance services. Elevate your driving experience with seamless solutions tailored to premium vehicles.",
};



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Heros />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Explore premium cars, expert repairs, and top-notch maintenance solutions.</p>
        </div>
        <div>
          <SearchBar />

          <div className="home__filter-container">
          <CustomeFilter title="fuel" />
          <CustomeFilter  title="year"/>

          </div>
        </div>
      </div>
    </main>
  );
}
