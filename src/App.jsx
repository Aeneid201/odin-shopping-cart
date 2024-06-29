import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />
      <main>
        <Outlet context={[cart, setCart]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
