// components
import Footer from "./Layout/footer";
import Navbar from "./Layout/navbar";

// sections
import Hero from "./hero";
import TopGlassesCategories from "./top-glasses-categories";
import Glass from "./glass";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopGlassesCategories />
      <Glass />
      <Footer />
    </>
  );
}
