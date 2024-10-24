import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";

function App() {
  useEffect(() => {
    // Scriptleri dinamik olarak ekle
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };
    const scripts = [
      "https://r.mobirisesite.com/827554/assets/web/assets/jquery/jquery.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/bootstrap/js/bootstrap.bundle.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/parallax/jarallax.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/smoothscroll/smooth-scroll.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/ytplayer/index.js?rnd=1729676536164", // Diğer script URL'leri burada
      "https://r.mobirisesite.com/827554/assets/dropdown/js/navbar-dropdown.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/vimeoplayer/player.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/embla/embla.min.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/embla/script.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/scrollgallery/scroll-gallery.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/theme/js/script.js?rnd=1729676536164",
      "https://r.mobirisesite.com/827554/assets/formoid/formoid.min.js?rnd=1729676536164",
    ];

    scripts.forEach(loadScript);
    return () => {};
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>

      {/* <h2>Salamm</h2> */}
    </div>
  );
}

export default App;
