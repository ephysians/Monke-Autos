import { Heros } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Monek's",
};


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Heros />
      
      <div className ="mt-12 padding-x  padding-y max-width" id="discover" >
        <div className="home__ text-container">
            <h1 className="text-4l font-extrabold">Catalogue</h1>
            <p> Explor the Cars you might like</p>
        </div>
      </div>
    </main>
  );
}
