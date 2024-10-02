// components
import Navbar from "../components/Layout/navbar";

// sections
import Hero from "../components/hero";
import TopGlassesCategories from "../components/top-glasses-categories";
import Glass from "../components/glass";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopGlassesCategories />
      <Glass />
     {/*  <Footer /> */}
    </>
  );
}
