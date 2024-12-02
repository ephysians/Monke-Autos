import "./globals.css";
import { Footer, Navbar } from "@/components";



export const metadata: Metadata = {
  title: "Luxury SUV Sales, Repairs & Maintenance | Premium Service",
  description: "Discover top-notch luxury SUVs, expert repairs, and reliable maintenance services. Elevate your driving experience with seamless solutions tailored to premium vehicles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
