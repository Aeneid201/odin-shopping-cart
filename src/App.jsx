import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useFetchAll } from "./hooks/useFetch";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { products, error, loading } = useFetchAll();
  const [cart, setCart] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Network error!</p>;

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
