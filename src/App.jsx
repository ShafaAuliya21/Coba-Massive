import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Lokasi from "./pages/Lokasi";
import Katalog from "./pages/Katalog";
import FAQs from "./pages/FAQs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/lokasi":
        title = "";
        metaDescription = "";
        break;
      case "/katalog":
        title = "";
        metaDescription = "";
        break;
      case "/faqs":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/lokasi" element={<Lokasi />} />
      <Route path="/katalog" element={<Katalog />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  );
}
export default App;
