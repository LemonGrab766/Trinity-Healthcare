
import HomeBanner from "@/components/Banners/HomeBanner";
import Contact from "@/components/Contact/Contact";
import Sections from "@/components/Sections/Sections";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <Sections />
      <Contact />
    </div>
  );
}
