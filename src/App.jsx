import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom"; 
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
<>
    <ScrollToTop />
    <div className="min-h-screen bg-red-500">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          
      </Routes>
      <Footer />

    
    </div>

    </>
  );
}

export default App;
