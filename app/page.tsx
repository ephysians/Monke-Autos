import { Heros } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Monek's",
};


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Heros />
    </main>
  );
}
