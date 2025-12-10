import { useState } from "react";
import Header from "./Components/Header";
import { About } from "./Components/About";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Menu } from "./Components/Menu";
import { Gallery } from "./Components/Gallery";
import { Footer } from "./Components/Footer";
import { WhatsAppFloating } from "./Components/WhatsAppFloating";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <WhatsAppFloating />
      <Header />
      <FeaturedProducts />
      <About />
      <Menu />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
